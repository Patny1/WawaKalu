import 'package:flutter/material.dart';
import 'alumnos/juego_paty.dart';
import 'alumnos/juego_andres.dart';

class JuegoPage extends StatelessWidget {
  const JuegoPage({super.key});

  @override
  Widget build(BuildContext context) {
    final juegos = [
      _JuegoItem(
        titulo: 'Juego de Paty',
        descripcion: 'Juego personalizado creado por Paty',
        icono: Icons.extension,
        pagina: const JuegoPatyPage(),
      ),
      _JuegoItem(
        titulo: 'Juego de Andrés',
        descripcion: 'Trivia creada por Andrés',
        icono: Icons.quiz,
        pagina: const JuegoAndresPage(),
      ),
    ];

    return Scaffold(
      appBar: AppBar(title: const Text('Juegos de alumnos')),
      body: ListView.builder(
        itemCount: juegos.length,
        itemBuilder: (context, index) {
          final juego = juegos[index];
          return Card(
            margin: const EdgeInsets.all(12),
            child: ListTile(
              leading: Icon(juego.icono, size: 32, color: Colors.teal),
              title: Text(juego.titulo),
              subtitle: Text(juego.descripcion),
              onTap: () => Navigator.push(
                context,
                MaterialPageRoute(builder: (_) => juego.pagina),
              ),
            ),
          );
        },
      ),
    );
  }
}

class _JuegoItem {
  final String titulo;
  final String descripcion;
  final IconData icono;
  final Widget pagina;

  _JuegoItem({
    required this.titulo,
    required this.descripcion,
    required this.icono,
    required this.pagina,
  });
}
