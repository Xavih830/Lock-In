import { useGamification } from "../../lib/octalframework";

export default function ConsciousnessBanner() {
    const { currentGoal } = useGamification();
    
    return (
      <Alert>
        <LightbulbIcon className="h-4 w-4" />
        <AlertTitle>¿Recuerdas por qué empezaste?</AlertTitle>
        <AlertDescription>
          {currentGoal.reason || "Estás trabajando en: " + currentGoal.name}
          <Progress value={currentGoal.progress} className="mt-2" />
        </AlertDescription>
      </Alert>
    );
  }