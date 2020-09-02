# Ethernet

Esta sección específicamente es para NICs dedicadas, generalmente la mayoríá de networking es compatible natively, como Aquantia, o tiene drivers de Mieze:

* [IntelMausiEthernet.kext](https://github.com/Mieze/IntelMausiEthernet)
   * Para la mayoría de controladores de Intel
* [SmallTree-I211-AT-patch](https://github.com/khronokernel/SmallTree-I211-AT-patch/releases)
   * Para I211-AT que normalmente se encuentra en placas AMD
* [AtherosE2200Ethernet.kext](https://github.com/Mieze/AtherosE2200Ethernet)
   * Para la mayoría de controladores Atheros
* [RealtekRTL8111](https://github.com/Mieze/RTL8111_driver_for_OS_X)
   * Para Gigabit Ethernet de Realtek
* [LucyRTL8125Ethernet](https://github.com/Mieze/LucyRTL8125Ethernet)
   * Para 2.5Gb Ethernet de Realtek

Ciertos NICs consumer no son compatibles como:
* Realtek L8200A(solamente encontrado en placas de Asus)
* Intel I225-V 

Para el i225-V, puedes spoof it a un i225LM que es compatible oficialmente: [Ejemplo](https://inyextciones.github.io/OpenCore-Install-Guide/config.plist/comet-lake.html#deviceproperties)


Vienen los problemas cuando usas onboard server NICs o hardware dedicada como el MNPA19-XTR 10Gbe NIC de Mellanox. You need to be quite vigilante and see if either the manufactures o la comunidad Hackintosh han desarollado drivers, or instead, you can take the safe route y comprar una 10Gbe Aquantia AQtion AQC-107 NIC ya que se encuentra en la iMacPro1,1, Macmini8,1 y MacPro7,1 así que tienen full compatibilidad nativa. Ten en cuenta que [ciertas marcas necesitan parches](https://www.insanelymac.com/forum/topic/330614-aquantia-10-gb-ethernet-support-thread-10132-upwards/)

[SmallTree](https://www.small-tree.com/categories/10gb-ethernet-cards/) es otra solución popular

**NICs que evitar**

* NICs de Intel para Servidores(incluso ambos 1Gbe y 10Gbe, [hay work-arounds para X520 y X540 NICs](https://www.tonymacx86.com/threads/how-to-build-your-own-imac-pro-successful-build-extended-guide.229353/)
* NICs de Servidores HP(incluso ambos 1Gbe y 10Gbe, generalmente renombrado Qlogic)
* NICs de Servidores Dell(includso ambos 1Gbe y 10Gbe, generalmente renombrado Broadcom o Intel)
* NICs Mellanox
