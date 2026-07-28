import SystemCard from './components/SystemCard';
import type { System } from './types/system';
import logoFull from './assets/logo-full.png';
import logoIcon from './assets/logo-icon.ico';

const systems: System[] = [
  {
    id: '1',
    name: 'DataCoreHS',
    description: 'Sistema de análise de dados financeiro, onde contém todas as notas de vendas, notas de serviços, análise do estoque e clientes.',
    url: 'https://datacorehs.healthsafetytech.com',
    icon: logoIcon,
  },
  {
    id: '2',
    name: 'ControlHS',
    description: 'Sistema de controle de patrimônio interno da empresa.',
    url: 'https://controlhs.healthsafetytech.com',
    icon: logoIcon,
  },
  {
    id: '3',
    name: 'HealthScore',
    description: 'Sistema utilizando IA para treinamento de vendedores utilizando objeções de clientes com base nos produtos da empresa.',
    url: 'https://healthscore.healthsafetytech.com',
    icon: logoIcon,
  },
  {
    id: '4',
    name: 'ChamadosHS',
    description: 'Sistema de chamados para a equipe técnica da empresa ter controle dos chamados que os funcionários abrem.',
    url: 'https://chamadoshs.healthsafetytech.com',
    icon: logoIcon,
  },
  {
    id: '5',
    name: 'GrowthHS',
    description: 'Sistema de CRM para a equipe comercial da empresa ter controle de seus pipelines e suas vendas.',
    url: 'https://hsgrowth.healthsafetytech.com',
    icon: logoIcon,
  },
  {
    id: '6',
    name: 'GestorHS',
    description: 'Sistema de controle de calibração e manutenção dos equipamentos da empresa.',
    url: 'https://gestorhs.healthsafetytech.com',
    icon: logoIcon,
  },
  {
    id: '7',
    name: 'TaskHS',
    description: 'Nosso quadro de tarefas (estilo Trello) onde todos os fluxos e processos da empresa são controlados.',
    url: 'https://taskhs.healthsafetytech.com',
    icon: logoIcon,
  },
  {
    id: '8',
    name: 'HelpHS',
    description: 'Sistema de abertura e controle dos chamados do time de suporte com os clientes.',
    url: 'https://helphs.healthsafetytech.com',
    icon: logoIcon,
  },
  {
    id: '9',
    name: 'TalentHS',
    description: 'Plataforma completa de RH com psicometria, IA e análise de equipe para potencializar o desenvolvimento de cada colaborador.',
    url: 'https://talenths.healthsafetytech.com',
    icon: logoIcon,
  },
  {
    id: '10',
    name: 'Em breve',
    description: 'Novos sistemas estão sendo desenvolvidos para facilitar ainda mais o seu trabalho. Fique atento às novidades!',
    url: '#',
    icon: logoIcon,
  },
  {
    id: '11',
    name: 'Em breve',
    description: 'Novos sistemas estão sendo desenvolvidos para facilitar ainda mais o seu trabalho. Fique atento às novidades!',
    url: '#',
    icon: logoIcon,
  },
  {
    id: '12',
    name: 'Em breve',
    description: 'Novos sistemas estão sendo desenvolvidos para facilitar ainda mais o seu trabalho. Fique atento às novidades!',
    url: '#',
    icon: logoIcon,
  },
];

function App() {
  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative flex flex-col h-screen">
        {/* Header */}
        <header className="pt-4 pb-2 px-6 shrink-0">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block mb-1 animate-fade-in">
              <img
                src={logoFull}
                alt="H&S Logo"
                className="max-w-[180px] h-auto mx-auto object-contain drop-shadow-lg animate-logo-pulse"
              />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1 animate-fade-in-delay">
              Central de Sistemas H&S
            </h1>
            <p className="text-sm text-gray-600 animate-fade-in-delay-2">
              Acesse todos os sistemas da empresa em um único lugar
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6 py-2 min-h-0">
          <div className="max-w-7xl w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {systems.map((system, index) => (
                <div
                  key={system.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <SystemCard system={system} />
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-2 px-6 shrink-0">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-block backdrop-blur-sm bg-white/40 rounded-full px-4 py-1.5 border border-white/50 shadow-sm">
                <p className="text-[10px] text-gray-700 font-medium">
                  © 2025 H&S - Todos os direitos reservados
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes logo-pulse {
          0%, 100% {
            transform: scale(1.2);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.6s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-logo-pulse {
          animation: logo-pulse 3s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}

export default App;