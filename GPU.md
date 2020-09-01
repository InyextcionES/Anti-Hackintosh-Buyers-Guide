# GPUs

~~Compra una GPU RTX, Queremos ver la gente sufriendo cuando se den cuenta de que estas GPUs no son compatible con ni High Sierra. Quermos ver los fans de Nvidia muriendo lentamente y con mucho dolor, esto será una adertencia de nunca luchar contra nuestro sennor y salvador Tim Apple~~
Si no quieres esta pena, evita todas las GPUs de Nvidia que no son basadas en Kepler. Actualmente(y probablemente para siempre), GPUs Turing y Volta no tienen niguna compatiblidad con ninguna versión de macOS, mientras Pascal y Maxwell tienen compatibilidad que terminó en High Sierra y también requieren WebDrivers así que no son GPUs nativas(esto es importante porque es otro another point of failure)

>  ¿P-p-pero han lanzado los drivers?

![WebDrivers](WebDrivers.gif)

Para GPUs, recomendamos que leas la [GPU Buyers Guide](https://inyextciones.github.io/GPU-Buyers-Guide/)
Y para ellos que tienen GPUs incompatibles, there's still hope for you! Usando la guía [**How to disable your unsupported GPU for macOS Guide**](https://khronokernel-4.gitbook.io/disable-unsupported-gpus/) (patente solicitada) de Khronokernel, a simpleton como tú también puede experience the glories of Mojave and beyond!

> ¿Hay alguna marca que evitar cuando compro una GPU para mi hack? 

Why I'm glad you asked, most manufactures actually have a pretty good track record with Hackintoshes pero hay 2 marcas que evitar. Aunque sea posible instalar macOS con estas GPUs, todavía hay alta posibilidad de problemas como inestabilidad y pantallas negras:
* XFX(talvez funcionen con el modo CSM/legacy desactivado, asegúrate que usas el modo UEFI)
* Powercolor
* MSI(específicamente las GPUs Navi, GPUs Vega y Polaris funcionan bien)

Nota: Compatibilidad con AMD Navi todavía es bastante incierto, dado que WhateverGreen ya no fue actualizada

::: tip Recomendaciones

Nuestras recomendaciones para GPUs:

* GPUs recientes de AMD: 
  * Polaris 10 y 20(RX 4XX, 5XX)
  * Vega 10 y 20(RX Vega 56, 64 y VII)
  * Navi 10(RX 5XXX)
* Marcas sugeridas:
  * Sapphire
  * Asus
  * Gigabyte
:::

**GPUs que no son compatibles con NINGUNA VERSIÓN DE macOS**

Turing

* Titan RTX
* RTX 2080 Ti
* RTX 2080 Super
* RTX 2080
* RTX 2070 Super
* RTX 2070
* RTX 2060 Super
* RTX 2060
* GTX 1660 Ti
* GTX 1660
* GTX 1650

* Quadro RTX 8000
* Quadro RTX 6000
* Quadro RTX 5000
* Quadro RTX 4000

Volta

* Titan V
* Titan V CEO Edition

* Quadro GV100

Lexa

* RX 540/X
* RX 550/X

**GPUs que evitar**

Pascal

* GTX Titan X(GP 102-400 núcleo Pascal)
* GTX Titan Xp(GP 102-450 núcleo Pascal)
* GTX 1080/Ti
* GTX 1070/Ti
* GTX 1060
* GTX 1050/Ti
* GT 1030

* Quadro P400
* Quadro P600
* Quadro P620
* Quadro P1000
* Quadro P2000
* Quadro P4000
* Quadro P5000
* Quadro P6000
* Quadro GP100

Maxwell

* GTX Titan X(GM 200 núcleo Maxwell)
* GTX 980/ti
* GTX 970
* GTX 960
* GTX 950
* GTX 750/ti
* GTX 745

* Quadro K620
* Quadro K1200
* Quadro K220
* Quadro M2000
* Quadro M4000
* Quadro M5000
* Quadro M6000
