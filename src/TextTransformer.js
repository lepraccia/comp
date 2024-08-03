import React, { useState } from 'react';
import Input from './components/Input/Input';
import Card from './components/Card/Card';
import CardHeader from './components/Card/CardHeader';
import CardTitle from './components/Card/CardTitle';
import CardContent from './components/Card/CardContent';
import Button from './components/Button/Button';

const TextTransformer = () => {
  const [input, setInput] = useState('');
  const [numericInput, setNumericInput] = useState('');
  const [output, setOutput] = useState('');
  const [csvData, setCsvData] = useState([]);

  const transformText = (text) => {
    return text.replace(/([A-Za-z]+)(\d+)([A-Za-z]+)/g, '$1/$2/$3');
  };

  const handleTransform = () => {
    setOutput(`${transformText(input)},${numericInput}`);
  };

const handleFileUpload = (e) => {
  const file = e.target.files[0];
  if (!file) {
    console.error('No file selected');
    return;
  }
  console.log('File selected:', file);
  const reader = new FileReader();
  reader.onload = (evt) => {
    const text = evt.target.result;
    const lines = text.split('\n').map(line => line.trim()).filter(Boolean);
    const parsedData = lines.map(line => {
      const [textPart, numericPart] = line.split(',');
      return { text: textPart, numeric: numericPart };
    });
    setCsvData(parsedData);
  };
  reader.readAsText(file);
};

  const handleTransformCsv = () => {
    const transformedData = csvData.map(item => ({
      text: transformText(item.text),
      numeric: item.numeric
    }));
    setCsvData(transformedData);
  };

  const handleDownloadCsv = () => {
    const csvContent = csvData.map(item => `${item.text},${item.numeric}`).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "transformed_data.csv");
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 p-4 relative">
      <Card className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="bg-blue-600 text-white">
          <CardTitle className="text-2xl font-bold text-center">TRASFORMAZIONE FORMATO NOME COMPOSIZIONI</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3 text-blue-800">Trasforma una singola stringa:</h3>
              <div className="flex flex-col space-y-2 mb-3">
                <Input
                  className="border-blue-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Inserisci il testo (es. KBFFFK22222EB)"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <Input
                  className="border-blue-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Campo numerico"
                  value={numericInput}
                  onChange={(e) => setNumericInput(e.target.value)}
                />
              </div>
              <Button onClick={handleTransform} className="w-full bg-blue-600 hover:bg-blue-700 text-white">Trasforma</Button>
              {output && (
                <div className="mt-3">
                  <p className="font-semibold text-blue-800">Risultato:</p>
                  <p className="mt-1 p-2 bg-white rounded border border-blue-200">{output}</p>
                </div>
              )}
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3 text-blue-800">Carica e trasforma file CSV:</h3>
              <Input type="file" accept=".csv" onChange={handleFileUpload} className="mb-3 border-blue-300 focus:border-blue-500 focus:ring-blue-500" />
              {csvData.length > 0 && (
                <div className="mt-3">
                  <Button onClick={handleTransformCsv} className="mr-2 bg-blue-600 hover:bg-blue-700 text-white">Trasforma Dati CSV</Button>
                  <Button onClick={handleDownloadCsv} className="bg-green-600 hover:bg-green-700 text-white">Scarica CSV Trasformato</Button>
                  <div className="mt-3 max-h-40 overflow-y-auto bg-white p-2 rounded border border-blue-200">
                    <p className="font-semibold text-blue-800">Anteprima dati:</p>
                    {csvData.slice(0, 5).map((item, index) => (
                      <p key={index} className="mt-1 p-1 bg-blue-50 rounded">{item.text},{item.numeric}</p>
                    ))}
                    {csvData.length > 5 && <p className="text-blue-600">... e altri {csvData.length - 5} record</p>}
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="absolute bottom-2 right-2 text-blue-800 font-semibold text-sm">
        CODED BY: LEONARDO PUZO
      </div>
    </div>
  );
};

export default TextTransformer;
