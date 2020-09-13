# CPUs

## CPUs que evitar:

Mientras que las CPUs AMD pueden funcionar, recomendamos que no las uses si puedes utilizar otra cosa, ya que siguen habiendo muchos problemas con ellas ya que no son soportadas nativamente. Requieren de un poco más de trabajo para configurarlas correctamente, pero hay una [Guía Vanilla de AMD (guía en inglés)](https://vanilla.amd-osx.com) para aquellos que prefieren CPUs AMD.

Problemas comunes con AMD:
* Los productos Adobe no siempre funcionan y no hay arreglos para lightroom por el momento.
   * Sin embargo, algunos arreglos pueden ser encontrados aquí: [Arreglos de Adobe](https://adobe.amd-osx.com/)
   * Ten en cuenta que estos "arreglos" sólo deshabilitan ciertas funciones, no son soluciones reales. 
* Cubase, REAPER, y otros softwares de audio se crashean cuando los abres
   * REAPER funciona *si* usas el build Clang
   * No hay una solución para Cubase por el momento
   * Plugins de Waves también provoca crashes
* Las máquinas virtuales que se ejecutan fuera del marco de AppleHV no funcionarán (programas como Parallels 15)
   * VirtualBox funciona bien ya que no usa AppleHV
* Docker roto
   * La caja de herramientas de Docker se basa en VirtualBox, muchas funciones no están disponibles con este
* El simulador de Apple Watch de Xcode está roto en Catalina
   * Mojave sí funciona
* La entrada de micrófono no está disponible con AppleALC que requiere VoodooHDA (calidad de audio bastante peor e inestabilidad general)
* Problemas de "audio drift" en APUs Ryzen (chips de la serie G) 
   * Un DAC USB es la única solución que no involucre cambiar tu CPU
* Es difícil configurar la suspensión (o imposible en algunos sistemas)
* Falta de administración de energía de la CPU
* No todos los puertos USB funcionan en algunas placas madre
   * Esto se debe a que no están asignados en ACPI, debes agregarlos manualmente en tu DSDT
* Actualizaciones atrasadas
* ~~Threadripper de 3ra generación no es soportado en bare-metal~~
  * La última BIOS y versión de OpenCore ahora arrancan con CPUs TRx40 

CPUs de AMD:
* AMD Ryzen 1000
* AMD Ryzen 2000
* AMD Ryzen 3000
* AMD Athlon
* AMD ThreadRipper
* Serie FX AMD

Con Intel, gracias a que la mayoría de las CPU son bastante similares, tienen soporte cuando la CPU se falsifica a un modelo compatible. El único inconveniente es que la iGPU rara vez funciona en Atom/Pentium/Celeron, lo que significa que una hackintosh barata con iGPU es imposible con estas CPU. Con respecto a las CPUs X99/LGA 2011-V3, existe el problema de que estas CPU nunca se utilizaron en una Mac real, por lo que existen bastantes problemas al ejecutar macOS en estos sistemas. Evita estos si es posible

**Nota para Usarios Dual Socket**: Ten en cuenta que el kernel de macOS solamente soprta 64 hilos. Ten esto en cuenta si tienes un setup con una CPU así. En el caso de que seas un usuario dual socket, tienes que usar [AppleMCEReporterDisabler](https://github.com/acidanthera/bugtracker/files/3703498/AppleMCEReporterDisabler.kext.zip) en macOS Catalina y superior. 

* Intel Atoms
* Intel Celerons
* Intel Pentiums
* Intel X79/LGA 2011
* Intel X99/LGA 2011-V3
* Intel X299/LGA-2066

::: tip Recomendaciones

Nuestras recomendaciones generales para CPUs son las siguientes:

* CPUs Semi-modernas Intel para consumidores
  * El soporte de CPUs en macOS va desde Ivy Bridge hasta Comet Lake.
:::

## CPUs Incompatibles

Las CPU totalmente no compatibles se dividen en 2 campos: Que sea demasiado vieja para ejecutar macOS o demasiado nuevo, donde los parches no son compatibles

**Demasiado antiguos**:

Esto consiste principalmente en CPUs a las que les falta el conjunto de instrucciones SSE4.2 requerido para Mojave y versiones posteriores; puede solucionarlo reemplazando el complemento de telemetría, pero no es lo ideal. Consulta [la repo trashOS](https://github.com/khronokernel/trashOS) para obtener más información.

* Wolfdale (serie Core2 Duo de Intel)
   * E7xxx
   * E8xxx
* Yorkfeild (serie Core2 Quad de Intel)
   * E8xxx
   * E9xxx

Luego están las CPU a las que les falta el SSE4.1 y los conjuntos de instrucciones anteriores, con este tienes soporte hasta OS X 10.11 El Capitan