import 'package:flutter/material.dart';
import 'pages/home_page.dart';

void main() {
  runApp(const WawaKaluApp());
}

class WawaKaluApp extends StatelessWidget {
  const WawaKaluApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Wawa Kalú',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF2E7D32)),
        useMaterial3: true,
      ),
      home: const HomePage(),
    );
  }
}
