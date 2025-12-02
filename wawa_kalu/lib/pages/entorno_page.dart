import 'package:flutter/material.dart';

class EntornoPage extends StatelessWidget {
  const EntornoPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Entorno y Salud')),
      body: const Center(child: Text('Aquí van los consejos de entornos protectores y salud')),
    );
  }
}
