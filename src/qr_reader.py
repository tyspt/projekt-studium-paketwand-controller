# Run the following commands first
# sudo apt-get install python3-opencv
# sudo apt-get install libqt4-test python3-sip python3-pyqt5 libqtgui4 libjasper-dev libatlas-base-dev -y
# pip install opencv-contrib-python==4.1.0.25 
# You may encounter an `“undefined symbol: __atomic_fetch_add8″` for libatomic  error when you import cv2  from Python if you do not use the specific version of OpenCV mentioned in the code block above.
# sudo modprobe bcm2835-v4l2

import cv2
import re

cap = cv2.VideoCapture(0)
detector = cv2.QRCodeDetector()

while True:
    _, img = cap.read()
    data, bbox, _ = detector.detectAndDecode(img)
    
    if bbox is not None:
        for i in range(len(bbox)):
            cv2.line(img, tuple(bbox[i][0]), tuple(bbox[(i+1) % len(bbox)][0]), color=(255,
                        0, 0), thickness=2)
            
        cv2.putText(img, data, (int(bbox[0][0][0]), int(bbox[0][0][1]) - 10), cv2.FONT_HERSHEY_SIMPLEX,
                    0.5, (0, 255, 0), 2)
        
        if data:
            print("Data found: " + data)
            data = ""

    cv2.imshow("code detector", img)

cap.release()
cv2.destroyAllWindows()