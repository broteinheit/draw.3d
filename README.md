# draw.3d
Benutzer können durch Bewegung ihrer Handys in einer 3D Umgebung „zeichnen“.

## Starten des Programmes
~~~
cd src\
node index.js
~~~

## Verwendung des Programms 
Um die volle Funktionalität des Programms auszuschöpfen, werden mindestens ein PC (Standrechner, Laptop) sowie ein Smartphone benötigt (es können aber auch mehrere Geräte verwendet werden). 
### Verbindung aufbauen
Verbinden Sie sich mit jeglichem Art von Browser (Chrome, Firefox, usw.), indem Sie in der Adressleiste die IP-Adresse des Gerätes, auf welchem der Service gestartet ist, gefolgt vom Port 3000, eintippen. z.B.: `` 192.168.0.100:3000 `` 
### Verwendung mit Smartphone
Nach dem Verbindungsaufbau, können Sie eine Farbe (welche jederzeit geändert werden kann) auswählen. Neigen Sie ihr Smartphone, um die Orientierung des Users am PC zu ändern. Als visuelles Feedback bewegt sich jeweils ein Kreis in der entsprechenden Farbe pro User entsprechend seiner derzeitigen Orientierung.  
### Verwendung mit PC
Jeder mit einem Smartphone verbundenen User wird als Kegel in der ausgewählten Farbe dargestellt. Jeder Kegel besitzt eine konstante Geschwindigkeit, mit dieser sich der User bewegt. Wenn ein User sein Smartphone neigt, wird die Richtung des Kegels dementsprechend geändert. Hinter jedem User werden Kugeln in der jeweiligen Farbe dargestellt, mit denen man „zeichnen“ kann.  

## Informationen zu verschiedenen Dingen
[Achsen - Orientierung](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Orientation_and_motion_data_explained)

[3D Grafik Bibliotheken](https://1stwebdesigner.com/3d-javascript-libraries/)

[Beipiel für Kreis-Zeug](https://mdn.mozillademos.org/en-US/docs/Web/API/Detecting_device_orientation$samples/Orientation_example?revision=1527467)
