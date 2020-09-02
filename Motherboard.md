# Motherboards

::: Advertencia

~~Actualmente el único motherboard que no tiene **nada de compatibilidad** son las placas madre B550 de AMD, requieren una KVM para funcionar.~~

Desarrollos recientes han resuelto esto con SSDT-CPUR, dirígete a la [Guía de instalación de OpenCore](https://inyextciones.github.io/OpenCore-Install-Guide/) para obtener más información

:::

En el caso de las placas madre, el aspecto principal a tener en cuenta son los controladores que está corriendo tu sistema, específicamente:

* Controlador de la interfaz de audio
* Controlador de interfaz de red (Networking Interface Controller o NIC en inglés)
* Controladores USB
* NVRAM
* iGPU
* RTC vs AWAC
* Mapas de memoria y protecciones

Con respecto a las placas madre AMD e Intel:

* **Intel**:
   * Las diferentes marcas tienen diferentes niveles de soporte, sin embargo, en general, todas las marcas pueden arrancar asumiendo que está de acuerdo con los retoques (mencionado a continuación).
* **AMD**:
   * Prácticamente todas las placas base de AMD son desfavorables debido a los [numerosos hacks necesarios para arrancar](https://github.com/AMD-OSX/AMD_Vanilla), sin embargo, la marca en sí no afectará mucho el soporte con macOS.
   * El soporte de hardware misceláneo como Audio y Ethernet sigue siendo algo a tener en cuenta.

Las principales marcas que evitar con **Intel** son:

* MSI
   * Diseño de memoria extraño que requiere la corrección de KASLR. Tiene una programación de ACPI realmente pobre, y muchos sistemas Z390 no se pueden arrancar con Clover
   * OpenCore puede arrancar estos sistemas con relativa facilidad
* AsRock
   * controlador USB no nativo, diseño de memoria extraño
   * Problemas de USB principalmente para Z390s y versiones anteriores, sin embargo Z490 está bien
* Gigabyte
   * Diseño de memoria extraño, requiere corrección de KASLR
   * Principalmente se sabe que Z390, Z370 y Z490 funcionan bien 
* Asus
   * Problemas de USB en B460, H470 y Z490
   * Z390 y versiones anteriores funcionan bien
 
::: tip Recomendaciones

Nuestras recomendaciones generales de marcas (Intel):

* Z370 y anterior: 
  * Gigabyte 
  * Asus
  * MSI
* Z390: 
  * Asus 
  * Gigabyte
* Z490: 
  * Asus, 
  * Gigabyte 
  * AsRock

:::

Principales plataformas a evitar (por la estabilidad la facilidad de configuración):

* X79
* X99
* X299
* C612
* C621
* C422
* B360 *
* B365 *
* H310 *
* H370 *
* Z390 *
* B460
* H470
* Z490

Nota (*): Consíguelos solo en caso de que necesites funciones de estas que no se encuentran en Z370 o si deseas overclockear una CPU de novena generación. La mayoría de los problemas con estos se han corregido, pero siguen siendo un gran lío, consulta la información a continuación.

---

## Audio

Con el audio, la mayoría de las placas son compatibles y puede encontrar una lista más extensa en [AppleALC] (https://github.com/acidanthera/AppleALC/wiki/Supported-codecs) para el audio. VoodooHDA es otra opción para usuarios legacy

**Nota**: Los usuarios de placas madre AMD requieren VoodooHDA si planeas usar el encabezado del micrófono integrado. Sin embargo la salida de audio regular funciona con AppleALC

---

##  Ethernet

Para el ethernet básicamente todos los NICs son compatibles (mira abajo para obtener más información)

* [IntelMausiEthernet.kext](https://github.com/Mieze/IntelMausiEthernet)
   * Para la mayoría de controladores Intel
* [SmallTree-I211-AT-patch](https://github.com/khronokernel/SmallTree-I211-AT-patch/releases)
   * Para I211-AT, que se encuentra comúnmente en placas AMD
* [AtherosE2200Ethernet.kext](https://github.com/Mieze/AtherosE2200Ethernet)
   * Para la mayoría de controladores Atheros
* [RealtekRTL8111](https://github.com/Mieze/RTL8111_driver_for_OS_X)
   * Para el ethernet gigabit de Realtek
* [LucyRTL8125Ethernet](https://github.com/Mieze/LucyRTL8125Ethernet)
   * Para el Ethernet Realtek de 2.5Gb

En el caso de los controladores de Ethernet legacy, tienes un par para elegir (los sistemas con estos chips son generalmente de una época anterior a la serie de procesadores Core i):

* [AppleIntelE1000e.kext](https://github.com/chris1111/AppleIntelE1000e)
* [https://github.com/Mieze/RealtekRTL8100](https://github.com/Mieze/RealtekRTL8100)

**Nota**: Realtek L8200A no es compatible. Para obtener una lista completa, consulta la [sección de Redes](/Networking.md)

**Nota 2**: Para aquellos que planean comprar placas Intel Z490, tengan en cuenta que la NIC i225-V no es compatible oficialmente sin una suplantación del device-id. Se puede encontrar un ejemplo de esto aquí: [Comet Lake i225-V spoof](https://inyextciones.github.io/OpenCore-Install-Guide/config.plist/comet-lake.html#deviceproperties)
---

## USB

Si hablamos de los USBs, las cosas son *bastante* simples, ya que la mayoría de los controladores Ryzen/Matisse, Intel y AsMedia funcionan de fábrica sin ninguna otra configuración además de un [mapa de USBs](https://dortania.github.io/USB-Map-Guide/). Para los usuarios de AsRock con CPU Intel, necesitarán usar XHCI-unsupported.kext (que se puede encontrar dentro del [proyecto USBInjectAll de Rehabman](https://github.com/RehabMan/OS-X-USB-Inject-All). Muchos usuarios de H370, B360, H310 y X79/X99/X299 también pueden beneficiarse de este.

**Nota especial de AMD**: debido a la forma en que macOS construye los USBs, **deben** definirse en algún lugar de las tablas ACPI. Por alguna razón, muchas placas AMD simplemente se olvidan de hacer esto y los usuarios terminan con muchos puertos USB rotos. Hay una solución, pero implica agregar manualmente los puertos al [DSDT o SSDT](https://dortania.github.io/USB-Map-Guide/).

**Nota especial de la serie 400 de Asus**: Gracias a que Asus rompió la especificación ACPI, deberás usar [SSDT-RHUB](https://dortania.github.io/Getting-Started-With-ACPI/) para resetear tus puertos.

---

## NVRAM

Con el NVRAM, la mayoría de las cosas fueron arregladas para plataformas de consumidores gracias a [SSDT-PMC](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/SSDT-PMC.dsl). Esto es principalmente relevante para los siguiente (ten en cuenta que no se incluye a la serie 400 como la Z490):

* Z390
* H370
* B360
* H310

Estas son algunas placas que *no* tienen NVRAM soportada, principalmente placas HEDT y de servidores:

* C612
* C621
* C422
* X79
* X99
* X299(Asus *si* tiene NVRAM funcional)

---

## iGPU

La parte divertida con respecto a Coffee Lake es que intel cambió muchas cosas relacionadas al funcionamiento de la salida de imagen. Debido a esto macOS no tiene idea de cómo manejarlos. Hay un arreglo, pero requiere [parcheo de BusID mediante WhateverGreen](https://dortania.github.io/OpenCore-Install-Guide/extras/gpu-patches.html). Las principales víctimas de esto son:

* Z490
* H470
* B460
* Z390
* H370
* B360
* H310

Ten en cuenta de que la Z370 no está incluida en esta lista debido a que esta placa madre es básicamente una Z270 por lo que el mapa de video de Apple funciona bien con ésta.

---

## RTC vs AWAC

Con el RTC vs AWAC, macOS directamente no arrancará con sistemas que tiene sus relojes usando AWAC y la mayoría de las GUIs de las BIOS ni siquiera muestran la opción de cambiarlo. Esto es principalmente visto en estas placas madre:

* Z490
* H470
* B460
* Z390
* H370
* B360
* H310
* Z370(Principalemente Gigabyte y AsRock, debido a que retrocedieron el reloj. Otras placas están bien)
* X299(principalmente aquellas lanzadas con CPUs Intel de décima generación. AsRock y Gigabyte son los dos infractores principales)
  * Asus ha estado transfiriendo AWAC incluso a placas de 2017 con actualizaciones de BIOS nuevas, cuidado.

Entonces, necesitamos algunos de estos:

* [Forzar RTC con un SSDT](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/SSDT-AWAC.dsl), 
* [Crear un reloj del sistema falso](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/SSDT-RTC0.dsl) 
* [parchearlo para sacarlo](https://www.hackintosh-forum.de/forum/thread/39846-asrock-z390-taichi-ultimate/?pageNo=2)

Puedes encontrar más información en **cómo** arreglarlo en la guía [Comenzando con ACPI](https://dortania.github.io/Getting-Started-With-ACPI/)

---

## Mapas de memoria y protecciones

Con esto los principales usuarios afectados son:

* C612 (generalmente vistos en placas de servidores)
* C621
* C422
* X79
* X99
* X299
* B360
* B365
* H310
* H370
* Z390
* B460
* H470
* Z490

El problema que enfrentan estas plataformas es que muchos confían en OsxAptioFix2Drv-free2000, que ahora se considera destructivo para su sistema, lo que significa que las guías de compilación basadas en él ahora no son válidas. Puede encontrar más información [aquí](https://www.reddit.com/r/hackintosh/comments/cfjyla/i_unleashed_a_plague_upon_you_guys_and_i_am_sorry/). Estos problemas se pueden solucionar principalmente calculando tu valor de slide: [Comprender y corregir los errores "Couldn't allocate runtime area"] (https://dortania.github.io/OpenCore-Install-Guide/extras/kaslr-fix.html )

Ah, pero para agregar diversión a esto, Intel introdujo protecciones de memoria, lo que significa que muchas de las correcciones de firmware proporcionadas por AptioMemoryFix/Opencore están completamente rotas. Específicamente, los parches de memoria proporcionados se anulan, lo que significa que nunca se usan. Afortunadamente, OpenCore introdujo una nueva peculiaridad llamada `ProtectUefiServices` que ayuda a solucionar este problema al garantizar que los parches se apliquen incluso después de restablecerlos.


