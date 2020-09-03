# Redes

Esta sección específicamente es para NICs dedicadas, generalmente la mayoría de las tarjetas de ethernet son compatibles nativamente, como es el caso de Aquantia, o tienen drivers de Mieze:

* [IntelMausiEthernet.kext](https://github.com/Mieze/IntelMausiEthernet)
   * Para la mayoría de los controladores de Intel
* [SmallTree-I211-AT-patch](https://github.com/khronokernel/SmallTree-I211-AT-patch/releases)
   * Para I211-AT que normalmente se encuentra en placas AMD
* [AtherosE2200Ethernet.kext](https://github.com/Mieze/AtherosE2200Ethernet)
   * Para la mayoría de controladores Atheros
* [RealtekRTL8111](https://github.com/Mieze/RTL8111_driver_for_OS_X)
   * Para el Ethernet Gigabit de Realtek
* [LucyRTL8125Ethernet](https://github.com/Mieze/LucyRTL8125Ethernet)
   * Para el Ethernet 2.5Gb de Realtek

Ciertos NICs de consumidores no son compatibles como:
* Realtek L8200A (solamente encontrado en ciertas placas de Asus)
* Intel I225-V 

Para el i225-V, puedes falsificarlo a un i225LM que es compatible oficialmente: [Ejemplo](https://inyextciones.github.io/OpenCore-Install-Guide/config.plist/comet-lake.html#deviceproperties)


Aparecen los problemas cuando usas NICs de servidores a bordo o hardware dedicado como el NIC MNPA19-XTR 10Gbe de Mellanox. Necesitas tener esto en cuenta y ver si los fabricantes o la comunidad Hackintosh han desarollado drivers, or si no, puedes tomar la ruta segura y comprar una NIC 10Gbe Aquantia AQtion AQC-107 ya que se encuentra en el iMacPro1,1, Macmini8,1 y MacPro7,1 así que tienen compatibilidad nativa. Ten en cuenta que [ciertas marcas necesitan parches](https://www.insanelymac.com/forum/topic/330614-aquantia-10-gb-ethernet-support-thread-10132-upwards/)

[SmallTree](https://www.small-tree.com/categories/10gb-ethernet-cards/) es otra solución popular

**NICs que evitar**

* NICs de Intel para Servidores (incluyendo 1Gbe y 10Gbe, [hay formas de solucionarlo en NICs X520 y X540](https://www.tonymacx86.com/threads/how-to-build-your-own-imac-pro-successful-build-extended-guide.229353/)
* NICs de Servidores HP (incluyendo 1Gbe y 10Gbe, generalmente Qlogic renombrado)
* NICs de Servidores Dell (incluyendo ambos 1Gbe y 10Gbe, generalmente Broadcom o Intel renombrado)
* NICs Mellanox
