# projekt-studium-paketwand-controller

This is the controller script running on offline package stations for the Projektstudium course at OTH Regensburg in WiSe 20/21, which aims to add more transparency to the logistic processes at a local company in Regensburg.

This project uses a common python web wrapper called [pywebview](https://github.com/r0x0r/pywebview) which enables us building GUI with angular, the structure is modified from another starter project: [pywebview-react-boilerplate](https://github.com/r0x0r/pywebview-react-boilerplate). 

Follow the instructions below to get started:

## Requirements
First make sure you have the following dependencies installed before proceeding:
- Python 3
- Node
- virtualenv

## Installation

``` bash
npm run init
```

This will create a virtual environment, install pip and Node dependencies. Alternatively you can perform these steps manually.

``` bash
npm install
pip install -r requirements.txt
```

On Linux systems installation system makes educated guesses. If you run KDE, QT dependencies are installed, otherwise GTK is chosen. `apt` is used for installing GTK dependencies. In case you are running a non apt-based system, you will have to install GTK dependencies manually. See [installation](https://pywebview.flowrl.com/guide/installation.html) f

## Usage

To launch the application.

``` bash
npm run start
```

To build an executable. The output binary will be produced in the `dist` directory.

``` bash
npm run build
```

To start a development server (only for testing frontend code).

``` bash
npm run dev
```