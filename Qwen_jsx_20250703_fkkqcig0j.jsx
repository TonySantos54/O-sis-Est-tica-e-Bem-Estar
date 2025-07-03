import React, { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("salas");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [financialData, setFinancialData] = useState({
    income: 12500,
    expenses: 8300,
    balance: 4200,
  });

  const rooms = [
    {
      id: 1,
      name: "Sala Zen",
      description: "Espaço tranquilo e iluminado para relaxamento e tratamentos leves.",
      capacity: 6,
      pricePerHour: 75,
      image: "https://placehold.co/600x400?text=Sala+Zen",
    },
    {
      id: 2,
      name: "Sala Sol",
      description: "Ambiente energético com equipamentos avançados para estética corporal.",
      capacity: 8,
      pricePerHour: 90,
      image: " https://placehold.co/600x400?text=Sala+Sol",
    },
    {
      id: 3,
      name: "Sala Lua",
      description: "Sala privativa ideal para tratamentos faciais e personalizados.",
      capacity: 2,
      pricePerHour: 100,
      image: " https://placehold.co/600x400?text=Sala+Lua",
    },
  ];

  return (
    <div className="min-h-screen bg-rose-50 text-gray-800">
      {/* Header */}
      <header className="bg-rose-900 text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Oásis Estética e Bem Estar</h1>
          <nav className="space-x-4 hidden md:flex">
            <button
              onClick={() => setActiveTab("salas")}
              className={`px-4 py-2 rounded-md transition ${
                activeTab === "salas" ? "bg-rose-700" : "hover:bg-rose-800"
              }`}
            >
              Salas
            </button>
            <button
              onClick={() => setActiveTab("financeiro")}
              className={`px-4 py-2 rounded-md transition ${
                activeTab === "financeiro" ? "bg-rose-700" : "hover:bg-rose-800"
              }`}
            >
              Financeiro
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Tabs */}
      <div className="md:hidden bg-rose-800 text-white flex justify-around py-2">
        <button
          onClick={() => setActiveTab("salas")}
          className={`px-4 py-2 rounded-md transition ${
            activeTab === "salas" ? "bg-rose-600" : "hover:bg-rose-700"
          }`}
        >
          Salas
        </button>
        <button
          onClick={() => setActiveTab("financeiro")}
          className={`px-4 py-2 rounded-md transition ${
            activeTab === "financeiro" ? "bg-rose-600" : "hover:bg-rose-700"
          }`}
        >
          Financeiro
        </button>
      </div>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {activeTab === "salas" && (
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl duration-300"
              >
                <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-rose-900 mb-2">{room.name}</h2>
                  <p className="text-sm text-gray-600 mb-4">{room.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>Capacidade: {room.capacity} pessoas</span>
                    <span>R$ {room.pricePerHour}/hora</span>
                  </div>
                  <button
                    onClick={() => setSelectedRoom(room)}
                    className="w-full bg-rose-900 text-white py-2 px-4 rounded-md hover:bg-rose-800 transition"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            ))}
          </section>
        )}

        {activeTab === "financeiro" && (
          <section className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-rose-900 mb-6">Painel Financeiro</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-rose-50 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-500">Receita Total</p>
                <p className="text-2xl font-semibold text-green-600">
                  R$ {financialData.income.toLocaleString("pt-BR")}
                </p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-500">Despesas</p>
                <p className="text-2xl font-semibold text-red-600">
                  R$ {financialData.expenses.toLocaleString("pt-BR")}
                </p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-500">Saldo Final</p>
                <p
                  className={`text-2xl font-semibold ${
                    financialData.balance >= 0 ? "text-emerald-600" : "text-red-600"
                  }`}
                >
                  R$ {financialData.balance.toLocaleString("pt-BR")}
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-medium text-rose-900 mb-4">Últimas Movimentações</h3>
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-rose-100 text-left text-sm text-gray-600">
                    <th className="py-2 px-4">Descrição</th>
                    <th className="py-2 px-4">Tipo</th>
                    <th className="py-2 px-4">Valor</th>
                    <th className="py-2 px-4">Data</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-rose-200">
                  <tr>
                    <td className="py-2 px-4">Aluguel Sala Zen</td>
                    <td className="py-2 px-4"><span className="text-green-600">Entrada</span></td>
                    <td className="py-2 px-4">R$ 450</td>
                    <td className="py-2 px-4">2024-04-01</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Compra de produtos</td>
                    <td className="py-2 px-4"><span className="text-red-600">Saída</span></td>
                    <td className="py-2 px-4">R$ 320</td>
                    <td className="py-2 px-4">2024-04-02</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Aluguel Sala Lua</td>
                    <td className="py-2 px-4"><span className="text-green-600">Entrada</span></td>
                    <td className="py-2 px-4">R$ 600</td>
                    <td className="py-2 px-4">2024-04-03</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Manutenção do ar-condicionado</td>
                    <td className="py-2 px-4"><span className="text-red-600">Saída</span></td>
                    <td className="py-2 px-4">R$ 850</td>
                    <td className="py-2 px-4">2024-04-04</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex space-x-4">
              <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
                Adicionar Entrada
              </button>
              <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition">
                Registrar Saída
              </button>
            </div>
          </section>
        )}

        {/* Room Details Modal */}
        {selectedRoom && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-lg w-full p-6 animate-fadeIn">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-rose-900">{selectedRoom.name}</h2>
                <button
                  onClick={() => setSelectedRoom(null)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>
              </div>
              <img
                src={selectedRoom.image}
                alt={selectedRoom.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-700 mb-4">{selectedRoom.description}</p>
              <div className="flex justify-between text-sm text-gray-500 mb-6">
                <span>Capacidade: {selectedRoom.capacity} pessoas</span>
                <span>Tarifa: R$ {selectedRoom.pricePerHour}/hora</span>
              </div>
              <button className="w-full bg-rose-900 text-white py-2 rounded-md hover:bg-rose-800 transition">
                Reservar Sala
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-rose-900 text-white text-center py-6 mt-12">
        <p className="text-sm">&copy; 2025 Oásis Estética e Bem Estar. Todos os direitos reservados.</p>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}