# O-sis-Est-tica-e-Bem-Estar
App de coworking para salas de estética
import React, { useState } from "react";
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
