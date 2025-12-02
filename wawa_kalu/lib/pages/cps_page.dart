import 'package:flutter/material.dart';

class CpsPage extends StatelessWidget {
  const CpsPage({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Sistema Ciberfísico')),
      body: const Center(child: Text('Aquí va la información de sus sistema ciberfísico')),
    );
  }
}