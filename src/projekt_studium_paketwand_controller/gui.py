import tkinter as tk       #Import Tkinter

def init_gui():
    window = tk.Tk()
    greeting = tk.Label(text="Hello, Tkinter")
    greeting.pack()
    
    window.attributes('-fullscreen', True)    
    window.mainloop()

if __name__ == "__main__":
    init_gui()
