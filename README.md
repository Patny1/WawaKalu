# WawaKalu
Proyecto inicia de app para proyecto social


**Wawa Kalú** es una aplicación educativa creada en **Flutter** para que niños y jóvenes (Ecuador) puedan crear y aportar sus propios juegos y contenidos digitales.  
El nombre proviene de la palabra local *wawa* (“niño”), resaltando nuestra identidad, cultura y comunidad.

---

## 🎯 Objetivos del proyecto
- Fomentar la creatividad y el aprendizaje participativo.  
- Permitir que cada estudiante cree sus propias actividades en **JSON** o **Dart**.  
- Construir un espacio digital que recoja nuestras **tradiciones, recetas, juegos y conocimientos locales**.

---

## 📂 Estructura del proyecto

```
lib/
├─ model/
│   └─ juego.dart
├─ pages/
│   ├─ alumnos/
│   │   ├─ juego_paty.dart
│   │   ├─ juego_andres.dart
│   │   └─ ...
│   ├─ juego_page.dart
│   ├─ home_page.dart
│   ├─ entorno_page.dart
│   ├─ lenguaje_page.dart
│   └─ nutricion_page.dart
└─ main.dart

contenido/
└─ juegos/
    ├─ juego_paty.json
    ├─ juego_andres.json
    └─ ...
```

---

## 🧑‍🎓 Cómo contribuir

### ✅ Opción 1: Crear un archivo **JSON**

1. Ve a la carpeta:  
   `contenido/juegos/`

2. Crea un archivo con tu nombre, por ejemplo:  
   `juego_maria.json`

3. Escribe tu actividad en formato JSON. Ejemplo:

```json
{
  "area": "juegos",
  "titulo": "Juego de memoria de frutas",
  "descripcion": "Empareja las frutas con sus nombres",
  "tipo": "memoria",
  "nivel": "básico"
}
```

---

### ✅ Opción 2: Crear un archivo **Dart**

1. Ve a la carpeta:  
   `lib/pages/alumnos/`

2. Crea un archivo con tu nombre, por ejemplo:  
   `juego_maria.dart`

3. Define tu clase de juego:

```dart
import 'package:flutter/material.dart';

class JuegoMariaPage extends StatelessWidget {
  const JuegoMariaPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Juego de María")),
      body: const Center(child: Text("Aquí va mi juego")),
    );
  }
}
```

4. Registra tu juego en `juego_page.dart` para que aparezca en el menú.

---

## 🚀 Ejecución del proyecto

Clona el repositorio:

```bash
git clone https://github.com/Patny1/WawaKalu.git
```

Instala las dependencias:

```bash
flutter pub get
```

Ejecuta la aplicación:

```bash
flutter run
```

---

## 🌱 Filosofía del proyecto

Creemos en una educación donde **los estudiantes sean protagonistas y creadores**, no solo consumidores.  
Cada aporte refleja **creatividad, identidad cultural y comunidad**, construyendo un ecosistema digital colaborativo.

---

## 📜 Licencia

Este proyecto se distribuye bajo la **Licencia MIT**, permitiendo su uso, modificación y distribución libre.

