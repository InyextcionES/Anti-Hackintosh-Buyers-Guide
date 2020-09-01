# Almacenamiento

Almanacenamiento es una sección que puede ser bastante complicada dado que hay consejos mixtos sobre los discos PCIe/NVMe. La mayoríá de estos consejos son basados en información antigua desde el tiempo en el que los discos PCIe/NVMe no fueron compatibles natively como el block size mattering o requieren kexts/drivers .efi. Pues, High Sierra introdució compatibilidad nativo para estos tipos de discos, pero ciertos discos todavía no funcionan y pueden causar inestabilidad si no son eliminados/bloqueados al nivel ACPI. 

El otro gran problema se trata de todos los discos NVMe de Samsung, específicamente que son conocidos por to slow down macOS, no funcionan bien con TRIM y también pueden causar inestabilidad. Esto es porque el controlador Pheonix encontrado en discos Samsung no le gusta a macOS, que prefiere el contralador Phison encontrado en discos de Sabrent Rocket y los contraldores de Western Digital(WD SN750). La manera más fácil de ver esto es durante el arranque, la mayoría de sistemas usando discos de Samsung tienen extra long boot times y have their drives run hotter due to the software TRIM failing(hardware TRIM still should be enabled but no partiality). Además unos discos NVMe de Intel y Kingston tienen estos problemas.

Y aunque ya no es un gran problema, ten en cuenta que todos los discos PCIe de Apple son basado en sectores 4k, así que recomendamos discos con estos sectores para mejor compatibilidad.

**Nota para laptops**: SSDs de Intel (normalmente) no funcionan bien con laptops y pueden causar problemas, evítalos si es posible

**SSD/Almacenamiento que NO es compatible:**

* Cualquier disco basado en eMMC (normalmente encontrado en netbooks, ciertas tablets y low end computer models.)
* Samsung PM981 y PM991(normalmente encontrado en sistemas OEM como laptops)
   * Aunque PM981 ha sido arreglado con la ver. 1.0.2 de [NVMeFix](https://github.com/acidanthera/NVMeFix/releases) todavía hay muchos problemas como kernel panics
* Micron 2200S
   * Muchos usarios tienen problemas con el arranque usando este disco

**SSDs que evitar**

Samsung:
* Samsung 970 Evo Plus (Aunque no es compatible natively out of the box, una [actualización del firmware de Samsung](https://www.samsung.com/semiconductor/minisite/ssd/download/tools/) permite el uso de estos discos en macOS)

Para todos los SSDs NVMe, se recomeienda usar [NVMeFix.kext](https://github.com/acidanthera/NVMeFix) para arreglar el uso de energía en estos discos
