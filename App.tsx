
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import IntroAnimation from './components/IntroAnimation';
import { Globe, Instagram, Linkedin, MessageCircle, ArrowRight, Share2, ArrowLeft } from 'lucide-react';

const App: React.FC = () => {
    const [showIntro, setShowIntro] = useState(true);
    const [showSocials, setShowSocials] = useState(false);

    if (showIntro) {
        return <IntroAnimation onComplete={() => setShowIntro(false)} />;
    }

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
            {/* Ambient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-600/10 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[80px]"></div>
            </div>

            <div className="max-w-2xl w-full relative z-10 flex flex-col items-center gap-12">

                {/* Brand Header */}
                <div className="flex flex-col items-center text-center gap-6">
                    {/* Edvay Logo */}
                    <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg mb-2">
                        <img
                            src="/edvay-logo.png"
                            alt="Edvay Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-4xl font-extrabold text-white tracking-tight">Edvay</h1>
                        <p className="text-slate-400 font-light text-sm max-w-[280px] mx-auto leading-relaxed">
                            A new approach to learning for making learning easier, faster and fun for every learner
                        </p>
                    </div>
                </div>

                {/* Content Switcher */}
                <div className="w-full flex flex-col items-center gap-6 max-w-[500px]">

                    {!showSocials ? (
                        <div className="w-full space-y-8 animate-in slide-in-from-right fade-in duration-300">

                            {/* Website Button */}
                            <div className="w-full flex items-center gap-4 group relative">
                                <a
                                    href="https://edvay.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full glass-panel p-5 rounded-2xl hover:bg-white/10 transition-colors border border-white/5 hover:border-violet-500/50 text-left active:scale-98"
                                >
                                    <div className="flex items-center gap-5">
                                        <div className="p-4 bg-violet-500/20 rounded-xl text-violet-300 border border-violet-500/20 group-hover:bg-violet-500 group-hover:text-white transition-colors">
                                            <Globe className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Official Website</h3>
                                            <p className="text-xs text-slate-400 font-mono mt-1">Visit AI Edtech Platform</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            {/* Socials Button */}
                            <div className="w-full flex items-center gap-4 group relative">
                                <button
                                    onClick={() => setShowSocials(true)}
                                    className="w-full glass-panel p-5 rounded-2xl hover:bg-white/10 transition-colors border border-white/5 hover:border-emerald-500/50 text-left active:scale-98"
                                >
                                    <div className="flex items-center gap-5">
                                        <div className="p-4 bg-emerald-500/20 rounded-xl text-emerald-300 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                            <Share2 className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Socials</h3>
                                            <p className="text-xs text-slate-400 font-mono mt-1">Connect with community</p>
                                        </div>
                                    </div>
                                </button>
                            </div>

                        </div>
                    ) : (
                        <div className="w-full space-y-4 animate-in slide-in-from-right fade-in duration-300 max-w-md">
                            {/* Header for Socials */}
                            <div className="flex items-center justify-between mb-2 px-2">
                                <button
                                    onClick={() => setShowSocials(false)}
                                    className="text-slate-400 hover:text-white flex items-center gap-2 text-sm font-mono transition-colors group"
                                >
                                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
                                </button>
                                <span className="text-slate-500 text-xs font-mono uppercase tracking-widest">Connect</span>
                            </div>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/923157236266"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-full p-4 glass-panel hover:bg-emerald-500/10 rounded-2xl flex items-center justify-between transition-all border border-white/10 hover:border-emerald-500/50"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-300 group-hover:text-emerald-200 transition-colors">
                                        <MessageCircle className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <span className="block font-bold text-white">WhatsApp</span>
                                        <span className="text-xs text-slate-400 font-mono">0315 7236266</span>
                                    </div>
                                </div>
                                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-300 transition-colors" />
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/edvay.limited"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-full p-4 glass-panel hover:bg-pink-500/10 rounded-2xl flex items-center justify-between transition-all border border-white/10 hover:border-pink-500/50"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-pink-500/20 rounded-xl text-pink-300 group-hover:text-pink-200 transition-colors">
                                        <Instagram className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-white">Instagram</span>
                                </div>
                                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-pink-300 transition-colors" />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/company/edu-ai-o/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-full p-4 glass-panel hover:bg-blue-500/10 rounded-2xl flex items-center justify-between transition-all border border-white/10 hover:border-blue-500/50"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-500/20 rounded-xl text-blue-300 group-hover:text-blue-200 transition-colors">
                                        <Linkedin className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-white">LinkedIn</span>
                                </div>
                                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-blue-300 transition-colors" />
                            </a>
                        </div>
                    )}

                </div>

                <footer className="mt-12 text-center space-y-2">
                    <p className="text-slate-600 text-xs font-mono">© 2026 Edvay Systems</p>
                </footer>

            </div>
        </div>
    );
};

export default App;
