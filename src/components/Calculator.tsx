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
      className={`p-4 text-lg font-semibold rounded-lg transform transition-transform active:scale-95 hover:bg-opacity-90 ${className}`}
    >
      {children}
    </button>
  );

  return (
    <div className="w-96 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl transform perspective-1000 rotate-y-3 rotate-x-3">
      <div className="mb-4 p-4 bg-gray-700 rounded-xl">
        <div className="text-right text-3xl font-mono text-white overflow-hidden">
          {display}
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {/* Scientific Functions */}
        <Button onClick={() => handleOperator('sin')} className="bg-indigo-600 text-white">
          sin
        </Button>
        <Button onClick={() => handleOperator('cos')} className="bg-indigo-600 text-white">
          cos
        </Button>
        <Button onClick={() => handleOperator('tan')} className="bg-indigo-600 text-white">
          tan
        </Button>
        <Button onClick={() => handleOperator('sqrt')} className="bg-indigo-600 text-white">
          √
        </Button>

        {/* Numbers and Operations */}
        <Button onClick={() => handleNumber('7')} className="bg-gray-600 text-white">
          7
        </Button>
        <Button onClick={() => handleNumber('8')} className="bg-gray-600 text-white">
          8
        </Button>
        <Button onClick={() => handleNumber('9')} className="bg-gray-600 text-white">
          9
        </Button>
        <Button onClick={() => handleOperator('/')} className="bg-orange-500 text-white">
          <Divide size={20} />
        </Button>

        <Button onClick={() => handleNumber('4')} className="bg-gray-600 text-white">
          4
        </Button>
        <Button onClick={() => handleNumber('5')} className="bg-gray-600 text-white">
          5
        </Button>
        <Button onClick={() => handleNumber('6')} className="bg-gray-600 text-white">
          6
        </Button>
        <Button onClick={() => handleOperator('*')} className="bg-orange-500 text-white">
          <X size={20} />
        </Button>

        <Button onClick={() => handleNumber('1')} className="bg-gray-600 text-white">
          1
        </Button>
        <Button onClick={() => handleNumber('2')} className="bg-gray-600 text-white">
          2
        </Button>
        <Button onClick={() => handleNumber('3')} className="bg-gray-600 text-white">
          3
        </Button>
        <Button onClick={() => handleOperator('-')} className="bg-orange-500 text-white">
          <Minus size={20} />
        </Button>

        <Button onClick={() => handleNumber('0')} className="bg-gray-600 text-white">
          0
        </Button>
        <Button onClick={() => handleNumber('.')} className="bg-gray-600 text-white">
          .
        </Button>
        <Button onClick={calculate} className="bg-orange-500 text-white">
          <Equal size={20} />
        </Button>
        <Button onClick={() => handleOperator('+')} className="bg-orange-500 text-white">
          <Plus size={20} />
        </Button>

        <Button onClick={clear} className="col-span-4 bg-red-500 text-white">
          <RotateCcw size={20} className="inline mr-2" /> Clear
        </Button>
      </div>
    </div>
  );
}

export default Calculator;
