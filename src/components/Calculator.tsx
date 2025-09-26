import React, { useState } from 'react';
import { X, Divide, Minus, Plus, Equal, RotateCcw } from 'lucide-react';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [memory, setMemory] = useState<number>(0);
  const [lastOperation, setLastOperation] = useState<string | null>(null);
  const [newNumber, setNewNumber] = useState(true);

  const handleNumber = (num: string) => {
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperator = (op: string) => {
    const current = parseFloat(display);
    
    if (lastOperation) {
      calculate();
    }
    
    setMemory(parseFloat(display));
    setLastOperation(op);
    setNewNumber(true);
  };

  const calculate = () => {
    if (!lastOperation) return;
    
    const current = parseFloat(display);
    let result = 0;

    switch (lastOperation) {
      case '+':
        result = memory + current;
        break;
      case '-':
        result = memory - current;
        break;
      case '*':
        result = memory * current;
        break;
      case '/':
        result = memory / current;
        break;
      case 'sin':
        result = Math.sin(current * Math.PI / 180);
        break;
      case 'cos':
        result = Math.cos(current * Math.PI / 180);
        break;
      case 'tan':
        result = Math.tan(current * Math.PI / 180);
        break;
      case 'sqrt':
        result = Math.sqrt(current);
        break;
    }

    setDisplay(result.toString());
    setLastOperation(null);
    setNewNumber(true);
  };

  const clear = () => {
    setDisplay('0');
    setMemory(0);
    setLastOperation(null);
    setNewNumber(true);
  };

  const Button = ({ children, onClick, className = '' }: { 
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
  }) => (
    <button
      onClick={onClick}
      className={`calculator-button p-4 text-lg font-semibold rounded-lg ${className}`}
    >
      {children}
    </button>
  );

  return (
    <div className="page-transition w-96 p-6 rounded-3xl shadow-2xl" 
         style={{
           backgroundColor: 'var(--color-secondary)',
           boxShadow: 'var(--shadow-xl)',
           border: '1px solid var(--color-border)'
         }}>
      <div className="mb-4 p-4 rounded-xl" 
           style={{
             backgroundColor: 'var(--color-tertiary)',
             border: '1px solid var(--color-border)'
           }}>
        <div className="text-right text-3xl font-mono overflow-hidden"
             style={{ color: 'var(--color-text-primary)' }}>
          {display}
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {/* Scientific Functions */}
        <Button 
          onClick={() => handleOperator('sin')} 
          className="rounded-lg"
          style={{
            backgroundColor: 'var(--color-button-accent)',
            color: 'var(--color-button-accent-text)',
            border: '1px solid var(--color-border)'
          }}>
          sin
        </Button>
        <Button 
          onClick={() => handleOperator('cos')} 
          className="rounded-lg"
          style={{
            backgroundColor: 'var(--color-button-accent)',
            color: 'var(--color-button-accent-text)',
            border: '1px solid var(--color-border)'
          }}>
          cos
        </Button>
        <Button 
          onClick={() => handleOperator('tan')} 
          className="rounded-lg"
          style={{
            backgroundColor: 'var(--color-button-accent)',
            color: 'var(--color-button-accent-text)',
            border: '1px solid var(--color-border)'
          }}>
          tan
        </Button>
        <Button 
          onClick={() => handleOperator('sqrt')} 
          className="rounded-lg"
          style={{
            backgroundColor: 'var(--color-button-accent)',
            color: 'var(--color-button-accent-text)',
            border: '1px solid var(--color-border)'
          }}>
          √
        </Button>

        {/* Numbers and Operations */}
        <Button 
          onClick={() => handleNumber('7')} 
          className="rounded-lg"
          style={{
            backgroundColor: 'var(--color-button-secondary)',
            color: 'var(--color-button-secondary-text)',
            border: '1px solid var(--color-border)'
          }}>
          7
        </Button>
        <Button 
          onClick={() => handleNumber('8')} 
          className="rounded-lg"
          style={{
            backgroundColor: 'var(--color-button-secondary)',
            color: 'var(--color-button-secondary-text)',
            border: '1px solid var(--color-border)'
          }}>
          8
        </Button>
        <Button 
          onClick={() => handleNumber('9')} 
          className="rounded-lg"
          style={{
            backgroundColor: 'var(--color-button-secondary)',
            color: 'var(--color-button-secondary-text)',
            border: '1px solid var(--color-border)'
          }}>
          9
        </Button>
        <Button 
          onClick={() => handleOperator('/')} 
          className="rounded-lg"
          style={{
            backgroundColor: 'var(--color-button-primary)',
            color: 'var(--color-button-primary-text)',
            border: '1px solid var(--color-border)'
          }}>
          <Divide size={20} />
        </Button>

        <Button 
          onClick={() => handleNumber('4')} 
          className="rounded-lg"
          style={{
            backgroundColor: 'var(--color-button-secondary)',
            color: 'var(--color-button-secondary-text)',
            border: '1px solid var(--color-border)'
          }}>
          4
        </Button>
        <Button 
          onClick={() => handleNumber('5')} 
          className="rounded-lg"
          style={{
            backgroundColor: 'var(--color-button-secondary)',
            color: 'var(--color-button-secondary-text)',
            border: '1px solid var(--color-border)'
          }}>
          5
        </Button>
        <Button 
          onClick={() => handleNumber('6')} 
          className="rounded-lg"
          style={{
            backgroundColor: 'var(--color-button-secondary)',
            color: 'var(--color-button-secondary-text)',
            border: '1px solid var(--color-border)'
          }}>
          6
        </Button>
        <Button 
          onClick={() => handleOperator('*')} 
          className="rounded-lg"
          style={{
            backgroundColor: 'var(--color-button-primary)',
            color: 'var(--color-button-primary-text)',
            border: '1px solid var(--color-border)'
          }}>
          <X size={20} />
        </Button>

        <Button 
          onClick={() => handleNumber('1')} 
          className="rounded-lg"
          style={{
            backgroundColor: 'var(--color-button-secondary)',
            color: 'var(--color-button-secondary-text)',
            border: '1px solid var(--color-border)'
          }}>
          1
        </Button>
        <Button 
          onClick={() => handleNumber('2')} 
          className="rounded-lg"
          style={{
            backgroundColor: 'var(--color-button-secondary)',
            color: 'var(--color-button-secondary-text)',
            border: '1px solid var(--color-border)'
          }}>
          2
        </Button>
        <Button 
          onClick={() => handleNumber('3')} 
          className="rounded-lg"
          style={{
            backgroundColor: 'var(--color-button-secondary)',
            color: 'var(--color-button-secondary-text)',
            border: '1px solid var(--color-border)'
          }}>
          3
        </Button>
        <Button 
          onClick={() => handleOperator('-')} 
          className="rounded-lg"
          style={{
            backgroundColor: 'var(--color-button-primary)',
            color: 'var(--color-button-primary-text)',
            border: '1px solid var(--color-border)'
          }}>
          <Minus size={20} />
        </Button>

        <Button 
          onClick={() => handleNumber('0')} 
          className="rounded-lg"
          style={{
            backgroundColor: 'var(--color-button-secondary)',
            color: 'var(--color-button-secondary-text)',
            border: '1px solid var(--color-border)'
          }}>
          0
        </Button>
        <Button 
          onClick={() => handleNumber('.')} 
          className="rounded-lg"
          style={{
            backgroundColor: 'var(--color-button-secondary)',
            color: 'var(--color-button-secondary-text)',
            border: '1px solid var(--color-border)'
          }}>
          .
        </Button>
        <Button 
          onClick={calculate} 
          className="rounded-lg"
          style={{
            backgroundColor: 'var(--color-button-primary)',
            color: 'var(--color-button-primary-text)',
            border: '1px solid var(--color-border)'
          }}>
          <Equal size={20} />
        </Button>
        <Button 
          onClick={() => handleOperator('+')} 
          className="rounded-lg"
          style={{
            backgroundColor: 'var(--color-button-primary)',
            color: 'var(--color-button-primary-text)',
            border: '1px solid var(--color-border)'
          }}>
          <Plus size={20} />
        </Button>

        <Button 
          onClick={clear} 
          className="col-span-4 rounded-lg"
          style={{
            backgroundColor: 'var(--color-button-danger)',
            color: 'var(--color-button-danger-text)',
            border: '1px solid var(--color-border)'
          }}>
          <RotateCcw size={20} className="inline mr-2" /> Clear
        </Button>
      </div>
    </div>
  );
}

export default Calculator;
