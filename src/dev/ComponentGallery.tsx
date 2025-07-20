import ConsciousnessBanner from '../components/dashboard/ConsciousnessBanner';
import NoveltyBiasCarousel from '../components/dashboard/NoveltyBiasCarousel';
import DopamineDetoxMode from '../components/focus-session/DopamineDetoxMode';

const COMPONENTS = [
  {
    name: 'ConsciousnessBanner',
    component: <ConsciousnessBanner />,
    description: 'Muestra el propósito del usuario'
  },
  {
    name: 'NoveltyBiasCarousel',
    component: <NoveltyBiasCarousel />,
    description: 'Combate el sesgo de novedad con contenido diario'
  },
  {
    name: 'DopamineDetoxMode',
    component: <DopamineDetoxMode />,
    description: 'Modo de baja estimulación'
  }
];

export default function ComponentGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {COMPONENTS.map((item) => (
        <div key={item.name} className="border rounded-lg p-4">
          <h3 className="font-bold">{item.name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
          <div className="p-4 border rounded-md bg-background">
            {item.component}
          </div>
        </div>
      ))}
    </div>
  );
}