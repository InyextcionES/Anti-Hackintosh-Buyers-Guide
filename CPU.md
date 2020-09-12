# CPUs

## CPUs que evitar:

Aunque los CPUs de AMD pueden funcionar en macOS, we advise against them due to numerous issues still plaguing them as they're not natively supported. They require quite a bit more work to get setup but for those who like would prefer AMD there is the [AMD Vanilla Guide](https://vanilla.amd-osx.com). 

Problemas comunes de AMD:
* Adobe Products don't always work y no hay ningún arreglo para Lightroom de momento
   * se encuentran unos arreglos aquí: [Adobe Fixes](https://adobe.amd-osx.com/)
   * Ten en cuenta que estos arreglos solamente desactivan functionality, no son arreglos reales
* Cubase, REAPER, y otro audio software crashes on launch
   * REAPER funciona *si* usas la versión Clang build
   * No hay ningún arreglos para Cubase de momento
   * Plugins de Waves también causan crashes
* Virtual Machine usando el framework de AppleHV no funcionan(ie: Parallels 15)
   * VirtualBox funciona dado que no usa AppleHV
* Docker es roto
   * Docker toolbox es basado en VirtualBox, y muchos features no son disponibles con esto
* Xcode AppleWatch simulator está roto en Catalina
   * Funciona normalmente en Mojave
* Microphone input no es disponbile con AppleALC y por eso requiere VoodooHDA(peor calidad de audio quality y causa inestabilidad)
* Audio Drift issues en APUs Ryzen(de la serie G)
   * USB DAC is only fix besides new CPU
* Difícil configurar Suspensión(o imposible en algunos sistemas)
* No CPU Power Management
* Not all USB ports work on some boards
   * This is due to not being assigned in ACPI, tienes que agregarlos manualmente a tu DSDT
* Delayed updates
* ~~3rd Gen Threadripper no es compatible en bare-metal~~
  * El BIOS y OpenCore más nuevos arrancan con CPUs TRx40

CPUs AMD:
* AMD Ryzen 1000 Series
* AMD Ryzen 2000 Series
* AMD Ryzen 3000 Series
* AMD Athlon
* AMD ThreadRipper
* AMD FX Series

Para Intel, dado que sus CPUs son bastante similares tienen compatiblidad cuando se hacen spoofed to a un modelo compatible. El único only downside es que la iGPU casi nunca funciona en Atom/Pentium/Celeron así que un Hackintosh barato con iGPU es imposible con estos CPUs. Regarding X99/LGA 2011-V3 CPUs, hay el problema de que estos CPUs nuncan fueron parte de ningún Mac real así que hay varias problemas si usas macOS en estos sistemass. Evítenlos si es posible

**Nota para Usarios Dual Socket**: Ten en cuenta que el kernel de macOS kernel solamente es compaitlbes con maximum de 64 threads. So for baller setups please be aware. And for dual socket users, tienes que usar [AppleMCEReporterDisabler](https://github.com/acidanthera/bugtracker/files/3703498/AppleMCEReporterDisabler.kext.zip) en macOS Catalina

* Intel Atoms
* Intel Celerons
* Intel Pentiums
* Intel X79/LGA 2011
* Intel X99/LGA 2011-V3
* Intel X299/LGA-2066

::: tip Recomendaciones

So our overall recommendation for CPUs:

* Semi-modern consumer Intel CPUs
  * Ivy Bridge through Comet Lake tienen la mejor compatibilidad en macOS
:::

## CPUs Incompatibles

So with outright unsupported CPUs, you're split into 2 camps: Either too old to run or too new that patches aren't supported

**Demasido antiguos**:

This mainly consists of CPUs that are missing the SSE4.2 instruction set required for Mojave y posterior, you can get around this by replacing the telemetry plugin but not ideal. See [trashOS repo](https://github.com/khronokernel/trashOS) para más info

* Wolfdale (Intel Core2 Duo series)
   * E7xxx
   * E8xxx
* Yorkfeild (Intel Core2 Quad series)
   * E8xxx
   * E9xxx

Then there's the CPUs that are missing the SSE4.1 and older instruction sets, with these support is stuck an OS X 10.11 El Capitan
