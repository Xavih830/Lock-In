// Implementa el principio de "Pérdida y Evitación" de Chou
export function DopamineDetoxMode() {
    const [isActive, setIsActive] = useState(false);
    
    useEffect(() => {
      if (isActive) {
        // Bloqueo de estímulos
        document.body.classList.add('detox-mode');
        playAmbientSound('nature');
        
        return () => {
          document.body.classList.remove('detox-mode');
        };
      }
    }, [isActive]);
  
    return (
      <div className="border rounded-lg p-4">
        <div className="flex items-center justify-between">
          <h3>Modo Desintoxicación</h3>
          <Switch 
            checked={isActive}
            onCheckedChange={setIsActive}
          />
        </div>
        
        {isActive && (
          <CountdownTimer 
            duration={25 * 60} 
            onComplete={() => {
              unlockAchievement('first_detox');
            }}
          />
        )}
      </div>
    );
  }