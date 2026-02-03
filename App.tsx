
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  Lock, 
  Star, 
  AlertCircle,
  ThumbsUp,
  Award,
  Sparkles,
  Target,
  PenTool
} from 'lucide-react';

const Badge: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = 'bg-blue-600' }) => (
  <div className={`${color} text-white text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest inline-flex items-center gap-1.5 shadow-lg`}>
    <Sparkles size={12} fill="currentColor" />
    {children}
  </div>
);

const App: React.FC = () => {
  const [timer, setTimer] = useState(600); // 10 minutos
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    
    // Simula o carregamento da barra de progresso
    const timeout = setTimeout(() => setProgress(65), 500);

    return () => {
      clearInterval(timerInterval);
      clearTimeout(timeout);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen text-white pb-20">
      {/* Progress Bar Header */}
      <div className="sticky top-0 z-50 bg-[#05070A]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-400">
              Seu acesso está sendo preparado…
            </span>
            <span className="text-[10px] md:text-xs font-black text-white">{progress}% concluído</span>
          </div>
          <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
            <div 
              className="progress-bar-fill h-full rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Warning Bar */}
      <div className="bg-red-600/90 py-2.5 px-4 text-center text-[10px] md:text-xs font-black tracking-widest uppercase animate-pulse">
        ⚠️ Atenção: não feche esta página. Essa oferta aparece uma única vez.
      </div>

      <main className="max-w-4xl mx-auto px-6 pt-12 md:pt-20">
        
        {/* Headline Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mt-8 mb-6 leading-tight tracking-tighter italic uppercase">
            Só <span className="text-blue-500">3% dos alunos</span> chegam até aqui.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Se você está vendo isso, é porque já deu um passo que a maioria não dá.
          </p>
        </section>

        {/* Congratulations Section */}
        <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-16 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">🎉 PARABÉNS! Você tomou a decisão certa.</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Você garantiu o <strong>Português Descomplicado</strong>. Agora você já domina gramática, interpretação e estrutura do que realmente cai em concursos.
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-full mb-8"></div>
          <p className="text-xl md:text-2xl font-bold italic text-white">
            Mas deixa eu te fazer uma pergunta direta:
          </p>
          <p className="text-blue-400 text-2xl md:text-3xl font-black mt-4 uppercase">
            👉 De que adianta dominar português se a redação ainda pode te derrubar?
          </p>
        </section>

        {/* The Problem Section */}
        <section className="mb-20">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center gap-2 text-red-500 font-black uppercase tracking-widest text-sm justify-center">
              <AlertCircle size={18} />
              O maior filtro dos concursos
            </div>
            <h2 className="text-3xl md:text-4xl font-black leading-none text-center">A REDAÇÃO NÃO PERDOA.</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                { t: "Não tem “chute”", d: "É técnica pura." },
                { t: "Não tem “mais ou menos”", d: "Ou você brilha ou é cortado." },
                { t: "Lógica da banca", d: "Perder pontos sem saber por quê é o fim." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="bg-red-500/20 text-red-500 p-1.5 rounded-lg mt-1 shrink-0">
                    <Target size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">{item.t}</p>
                    <p className="text-gray-400 text-sm">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="bg-red-500/5 border-l-4 border-red-500 p-6 rounded-r-xl mt-8">
              <p className="text-gray-300 italic text-center md:text-left">
                ❌ Não melhora escrevendo mais. Melhora quando alguém mostra exatamente o que corrigir.
              </p>
            </div>
          </div>
        </section>

        {/* The Solution: MESTRE DA REDAÇÃO */}
        <section className="text-center mb-20 relative">
          <div className="mb-6">
            <span className="text-blue-400 font-black tracking-[0.3em] uppercase text-sm">Apresentamos o Futuro</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-10">
            MESTRE DA <span className="blue-gradient-text">REDAÇÃO</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Um agente de IA especializado em redação para concursos, treinado para pensar como a banca e avaliar como um corretor real.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { icon: <Target className="text-blue-400" />, title: "Do zero ao topo", desc: "Aprenda ideia → tese → argumentos → conclusão." },
              { icon: <Award className="text-blue-400" />, title: "Competências C1-C5", desc: "Igual à correção oficial da banca examinadora." },
              { icon: <AlertCircle className="text-blue-400" />, title: "Feedback cirúrgico", desc: "Saiba exatamente onde perdeu ponto e por quê." },
              { icon: <PenTool className="text-blue-400" />, title: "Reescritas prontas", desc: "Receba o texto melhorado para subir sua nota na hora." },
              { icon: <Star className="text-blue-400" />, title: "Intervenções 5E", desc: "Crie propostas de intervenção nota mil sob medida." },
              { icon: <Lock className="text-blue-400" />, title: "Evite o zero", desc: "Identifique erros fatais antes que eles cheguem à prova." }
            ].map((feat, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="mb-4">{feat.icon}</div>
                <h4 className="font-bold text-lg mb-2">{feat.title}</h4>
                <p className="text-gray-400 text-sm leading-snug">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Connection Section */}
        <section className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-xl md:text-2xl font-bold leading-relaxed">
            O Português Descomplicado te dá a base. O Mestre da Redação transforma essa base em nota alta.
          </p>
          <p className="text-blue-500 font-black uppercase mt-4 tracking-widest">Um complementa o outro. 100% de cobertura.</p>
        </section>

        {/* Pricing Section - Green Moving Gradient */}
        <section className="relative">
          <div className="absolute -inset-4 bg-green-500/20 blur-[120px] rounded-full opacity-50"></div>
          
          <div className="relative bg-[#0D1117] border border-green-500/30 rounded-[40px] p-10 md:p-16 text-center overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5">
                <Target size={120} />
             </div>
             
             <p className="text-gray-400 text-xl font-bold mb-4 uppercase tracking-tighter">Oferta Única para Alunos</p>
             <p className="text-gray-500 text-2xl line-through mb-2 font-black">De R$699,90</p>
             
             <div className="mb-8">
               <p className="text-lg font-bold text-green-400 uppercase tracking-widest mb-2">Por apenas:</p>
               <div className="text-7xl md:text-9xl font-black text-white tracking-tighter">
                  R$ 69,90
               </div>
               <div className="moving-green-gradient h-1.5 w-48 mx-auto mt-4 rounded-full"></div>
             </div>

             <p className="text-gray-400 text-lg mb-10 max-w-sm mx-auto">
               Menos que um lanche. <span className="text-white font-bold">Mais barato que errar uma redação inteira.</span>
             </p>

             <div className="space-y-6">
                <button className="moving-green-gradient glow-green w-full max-w-xl mx-auto py-6 md:py-8 rounded-3xl text-white text-xl md:text-2xl font-black italic uppercase tracking-tighter flex items-center justify-center gap-4 hover:scale-[1.02] transition-transform duration-300 group">
                   Aproveitar esta oferta agora
                   <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                </button>
                <p className="text-green-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                  (Adicionar o Mestre da Redação ao meu acesso)
                </p>
             </div>

             <div className="mt-12">
                <button className="text-gray-600 hover:text-white underline text-xs md:text-sm font-medium transition-colors">
                  Não tenho interesse (Prefiro continuar estudando sozinho e arriscar na redação)
                </button>
             </div>
          </div>
        </section>

        {/* Final Reassurance */}
        <section className="mt-24 text-center pb-20">
          <div className="flex justify-center gap-8 text-gray-500 grayscale hover:grayscale-0 transition-all duration-500 opacity-50">
             <div className="flex flex-col items-center">
                <Lock size={24} className="mb-2" />
                <span className="text-[10px] font-bold uppercase">SSL Encrypted</span>
             </div>
             <div className="flex flex-col items-center">
                <Award size={24} className="mb-2" />
                <span className="text-[10px] font-bold uppercase">Qualidade Garantida</span>
             </div>
             <div className="flex flex-col items-center">
                <CheckCircle size={24} className="mb-2" />
                <span className="text-[10px] font-bold uppercase">Acesso Imediato</span>
             </div>
          </div>
          <p className="text-gray-700 text-[10px] mt-12 tracking-widest uppercase font-black">
            Expira em: <span className="text-white">{formatTime(timer)}</span>
          </p>
        </section>
      </main>
    </div>
  );
};

export default App;
