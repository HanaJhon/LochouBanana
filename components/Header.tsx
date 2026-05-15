
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { SparkleIcon, GitHubIcon, ClockIcon, CogIcon, QuestionMarkCircleIcon, TemplateLibraryIcon } from './icons';
import { type View } from '../App';
import { motion } from 'framer-motion';

interface HeaderProps {
  activeView: View;
  onViewChange: (view: View) => void;
  onOpenSettings: () => void;
  onOpenHelp: () => void;
}

const NavItem: React.FC<{ 
    view: View; 
    current: View; 
    onClick: () => void; 
    icon: React.ReactNode; 
    label: string;
    fontClass?: string;
    colorClass: string;
}> = ({ view, current, onClick, icon, label, fontClass = "", colorClass }) => {
    const isActive = current === view;
    
    return (
        <button 
            onClick={onClick} 
            className={`relative px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 group ${isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
        >
            {isActive && (
                <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 border border-white/5 rounded-full backdrop-blur-sm"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            )}
            <span className={`relative z-10 ${isActive ? colorClass : 'group-hover:text-white transition-colors'}`}>
                {icon}
            </span>
            <span className={`relative z-10 text-sm font-semibold ${fontClass}`}>
                {label}
            </span>
        </button>
    );
};

const Header: React.FC<HeaderProps> = ({ activeView, onViewChange, onOpenSettings, onOpenHelp }) => {
  return (
    <div className="sticky top-4 z-50 w-full px-4 flex justify-center">
        <header className="w-full max-w-6xl glass-panel rounded-full px-4 py-3 flex items-center justify-between relative overflow-hidden">
            {/* Subtle Gradient Glow behind header */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl opacity-50 pointer-events-none"></div>

            {/* Left: Navigation */}
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
                <NavItem 
                    view="editor" 
                    current={activeView} 
                    onClick={() => onViewChange('editor')} 
                    icon={<SparkleIcon className="w-5 h-5" />} 
                    label="LochouBanana"
                    colorClass="text-blue-400"
                />
                
                <NavItem 
                    view="past-forward" 
                    current={activeView} 
                    onClick={() => onViewChange('past-forward')} 
                    icon={<ClockIcon className="w-5 h-5" />} 
                    label="Past Forward"
                    fontClass="font-['Caveat'] text-lg"
                    colorClass="text-yellow-400"
                />

                <NavItem 
                    view="template-library" 
                    current={activeView} 
                    onClick={() => onViewChange('template-library')} 
                    icon={<TemplateLibraryIcon className="w-5 h-5" />} 
                    label="NB 提示词"
                    fontClass="font-['Permanent_Marker'] tracking-wider"
                    colorClass="text-green-400"
                />
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3 pl-4 border-l border-white/10 ml-2">


                <div className="flex items-center gap-1">
                    <button
                        onClick={onOpenHelp}
                        className="p-2 text-gray-400 rounded-full hover:bg-white/10 hover:text-white transition-colors active:scale-95"
                        title="帮助"
                    >
                        <QuestionMarkCircleIcon className="w-5 h-5" />
                    </button>
                    <button
                        onClick={onOpenSettings}
                        className="p-2 text-gray-400 rounded-full hover:bg-white/10 hover:text-white transition-colors active:scale-95"
                        title="设置"
                    >
                        <CogIcon className="w-5 h-5" />
                    </button>
                    <a
                        href="https://github.com/aigem/aice_ps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 rounded-full hover:bg-white/10 hover:text-white transition-colors active:scale-95"
                        title="GitHub"
                    >
                        <GitHubIcon className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </header>
    </div>
  );
};

export default Header;
