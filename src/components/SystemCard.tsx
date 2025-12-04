import type { System } from '../types/system';

interface SystemCardProps {
  system: System;
}

export default function SystemCard({ system }: SystemCardProps) {
  const isComingSoon = system.name === 'Em breve';

  const CardWrapper = isComingSoon ? 'div' : 'a';
  const cardProps = isComingSoon
    ? { className: "group relative block h-full cursor-not-allowed" }
    : {
        href: system.url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group relative block h-full"
      };

  return (
    <CardWrapper {...cardProps}>
      {/* Glow Effect */}
      {!isComingSoon && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
      )}

      {/* Card */}
      <div className={`relative h-full backdrop-blur-xl rounded-xl shadow-lg transition-all duration-500 p-4 border flex flex-col ${
        isComingSoon
          ? 'bg-white/30 border-white/30 opacity-50'
          : 'bg-white/80 hover:shadow-2xl hover:-translate-y-2 border-white/50'
      }`}>

        {/* Icon Container */}
        <div className="flex justify-center mb-3">
          <div className="relative">
            {/* Icon Background Glow */}
            {!isComingSoon && (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
            )}

            {/* Icon */}
            <div className={`relative w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-xl transition-all duration-500 shadow-md ${
              !isComingSoon ? 'group-hover:scale-110 group-hover:rotate-3' : ''
            }`}>
              <img
                src={system.icon}
                alt={`${system.name} logo`}
                className="w-9 h-9 object-contain filter drop-shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center flex-1 flex flex-col">
          <h3 className={`text-base font-bold text-gray-800 mb-2 transition-all duration-300 ${
            !isComingSoon ? 'group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text' : ''
          }`}>
            {system.name}
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed flex-1">
            {system.description}
          </p>
        </div>

        {/* Arrow Icon */}
        {!isComingSoon && (
          <div className="flex justify-center mt-3 pt-3 border-t border-gray-200/50">
            <div className="flex items-center gap-2 text-xs font-medium text-gray-500 group-hover:text-blue-600 transition-colors duration-300">
              <span>Acessar</span>
              <svg
                className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        )}

        {/* Shine Effect */}
        {!isComingSoon && (
          <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
        )}
      </div>
    </CardWrapper>
  );
}