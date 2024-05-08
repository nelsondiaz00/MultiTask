export default function priceEvaluation(opcion) {
    switch(opcion) {
      case 'Profesional':
        return 250000;
      case 'Tecnólogo':
        return 200000;
      case 'Técnico':
        return 150000;
      case 'Otros':
        return 100000;
      default:
        return 0;
    }
  }
  
