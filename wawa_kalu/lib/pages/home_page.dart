import 'package:flutter/material.dart';
import 'juego_page.dart';
import 'nutricion_page.dart';
import 'lenguaje_page.dart';
import 'entorno_page.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    final items = [
      _HomeItem('Juegos', Icons.videogame_asset, const JuegoPage()),
      _HomeItem('Nutrición', Icons.restaurant_menu, const NutricionPage()),
      _HomeItem('Lenguaje y comunicación', Icons.record_voice_over, const LenguajePage()),
      _HomeItem('Entornos protectores y salud', Icons.volunteer_activism, const EntornoPage()),
    ];

    return Scaffold(
      appBar: AppBar(
        title: const Text('Wawa Kalú'),
        leading: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Image.asset('assets/images/WawaKalu_icono.png'),
        ),
      ),
      body: Column(
        children: [
          const SizedBox(height: 16),
          Image.asset(
            'assets/images/familia_kalu.png',
            height: 180,
          ),
          const SizedBox(height: 16),
          Expanded(
            child: GridView.builder(
              padding: const EdgeInsets.all(16),
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2, mainAxisSpacing: 16, crossAxisSpacing: 16,
              ),
              itemCount: items.length,
              itemBuilder: (context, i) {
                final item = items[i];
                return InkWell(
                  onTap: () => Navigator.push(
                    context, MaterialPageRoute(builder: (_) => item.page),
                  ),
                  child: Card(
                    elevation: 3,
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                    child: Center(
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Icon(item.icon, size: 48, color: Colors.teal),
                          const SizedBox(height: 8),
                          Text(
                            item.title,
                            textAlign: TextAlign.center,
                            style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w500),
                          ),
                        ],
                      ),
                    ),
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}

class _HomeItem {
  final String title;
  final IconData icon;
  final Widget page;
  _HomeItem(this.title, this.icon, this.page);
}
