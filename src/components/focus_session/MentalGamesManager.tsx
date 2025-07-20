// Implementa "Brain Babbling" con gamificación
export const mentalGames = [
    {
      id: 'shape-match',
      name: 'Formas Flotantes',
      description: 'Conecta formas similares',
      component: ShapeMatchGame,
      unlockLevel: 3
    },
    // ... otros juegos
  ];
  
  export default function MentalGamesManager() {
    const { userLevel } = useGamification();
    
    return (
      <Tabs>
        {mentalGames
          .filter(game => game.unlockLevel <= userLevel)
          .map(game => (
            <TabsTrigger value={game.id} key={game.id}>
              {game.name}
            </TabsTrigger>
          ))
      </Tabs>
    );
  }