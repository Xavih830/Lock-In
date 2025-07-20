export function DecisionEvaluator() {
    const [decision, setDecision] = useState('');
    const { analyzeBias } = useBiasAnalyzer();
  
    const handleEvaluate = () => {
      const analysis = analyzeBias(decision);
      // Retorno visual usando principios de Octalysis
      return (
        <div>
          <h3>Análisis de sesgos:</h3>
          <ul>
            {analysis.biases.map(bias => (
              <li key={bias.type} className="flex items-center">
                {bias.type === 'prospective' && <TimerOffIcon />}
                <span>{bias.message}</span>
              </li>
            ))}
          </ul>
          <EpicWinAnimation show={analysis.isSoundDecision} />
        </div>
      );
    };
  
    return (
      <div>
        <Textarea 
          placeholder="Describe una decisión que estés considerando..."
          value={decision}
          onChange={e => setDecision(e.target.value)}
        />
        <Button onClick={handleEvaluate}>Analizar Objetivamente</Button>
      </div>
    );
  }