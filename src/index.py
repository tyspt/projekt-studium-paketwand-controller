import os, sys, threading
import webview

from gpiozero import LED
from time import sleep

red = LED(17)
green = LED(27)

class Api:
    def unlock_door(self):
        print('Door unlock initiated...')
        red.off()
        green.on()
        sleep(10)
        red.on()
        green.off()


def get_entrypoint():
    def exists(path):
        return os.path.exists(os.path.join(os.path.dirname(__file__), path))

    if exists('../gui/index.html'): # unfrozen development
        return '../gui/index.html'

    if exists('../Resources/gui/index.html'): # frozen py2app
        return '../Resources/gui/index.html'

    if exists('./gui/index.html'):
        return './gui/index.html'

    raise Exception('No index.html found')

entry = get_entrypoint()


if __name__ == '__main__':
    try:
        red.on()
        green.off()
        window = webview.create_window('Projektstudium Smart Locker Controller', entry, js_api=Api(), fullscreen=True)
        webview.start(http_server=True)
    except KeyboardInterrupt:
        sys.exit(0)
