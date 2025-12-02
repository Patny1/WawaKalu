import 'package:flutter/material.dart';

class NutricionPage extends StatelessWidget {
  const NutricionPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Receta saludable')),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: const [
            Text('Ensalada de quinua con vegetales',
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
            SizedBox(height: 12),
            Text('Ingredientes:'),
            Text('- 1 taza de quinua cocida'),
            Text('- Tomate, pepino, zanahoria'),
            Text('- Limón, aceite de oliva, sal'),
            SizedBox(height: 12),
            Text('Preparación:'),
            Text('Mezclar la quinua con los vegetales picados, '
                'agregar jugo de limón, aceite y sal al gusto.'),
          ],
        ),
      ),
    );
  }
}