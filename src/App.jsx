import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Smartphone, BookOpen, Layers, Zap, Cpu, Code2, Globe, Database, Monitor, Smartphone as AndroidIcon, Sparkles, Loader2, Key, CheckCircle2, Menu, Sun, Moon } from 'lucide-react';
import { questionData } from './data/questions';
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from 'react-markdown';

const SectionIcon = ({ section }) => {
  const s = section.toLowerCase();
  if (s.includes('core')) return <Smartphone size={18} />;
  if (s.includes('lifecycle')) return <Layers size={18} />;
  if (s.includes('ui')) return <Monitor size={18} />;
  if (s.includes('compose')) return <Code2 size={18} />;
  if (s.includes('data') || s.includes('network')) return <Database size={18} />;
  if (s.includes('performance')) return <Zap size={18} />;
  return <BookOpen size={18} />;
};

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('android_theme') || 'light';
  });

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('android_theme', theme);
  }, [theme]);

  const [answers, setAnswers] = useState(() => {
    const saved = localStorage.getItem('android_interview_answers');
    return saved ? JSON.parse(saved) : {};
  });

  const [apiKey, setApiKey] = useState(() => {
    return localStorage.getItem('gemini_api_key') || '';
  });

  const [modelName, setModelName] = useState(() => {
    return localStorage.getItem('gemini_model_name') || 'gemini-1.5-flash';
  });

  const [userLevel, setUserLevel] = useState(() => {
    return localStorage.getItem('android_user_level') || 'Junior';
  });

  const [feedbackLang, setFeedbackLang] = useState(() => {
    return localStorage.getItem('android_feedback_lang') || 'Turkish';
  });

  const [aiHistory, setAiHistory] = useState(() => {
    const saved = localStorage.getItem('android_ai_history');
    return saved ? JSON.parse(saved) : {};
  });

  const [aiFeedback, setAiFeedback] = useState({}); // Current selected feedback ID mapping
  const [loading, setLoading] = useState({});
  const [activeSection, setActiveSection] = useState(questionData[0].section);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sectionRefs = useRef({});

  useEffect(() => {
    localStorage.setItem('android_interview_answers', JSON.stringify(answers));
  }, [answers]);

  useEffect(() => {
    localStorage.setItem('gemini_api_key', apiKey);
  }, [apiKey]);

  useEffect(() => {
    localStorage.setItem('android_user_level', userLevel);
  }, [userLevel]);

  useEffect(() => {
    localStorage.setItem('android_feedback_lang', feedbackLang);
  }, [feedbackLang]);

  useEffect(() => {
    localStorage.setItem('android_ai_history', JSON.stringify(aiHistory));
  }, [aiHistory]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute('data-section'));
        }
      });
    }, options);

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (id, lang, value) => {
    setAnswers(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [lang]: value
      }
    }));
  };

  const getSectionCompletion = (section) => {
    const questionIds = section.questions.map(q => q.id);
    const completedCount = questionIds.filter(id => (answers[id]?.tr?.trim() || answers[id]?.en?.trim())).length;
    return {
      completed: completedCount,
      total: questionIds.length,
      allDone: completedCount === questionIds.length
    };
  };

  const verifyWithAI = async (id, question) => {
    if (!apiKey) {
      alert("Lütfen önce Gemini API Key girin.");
      return;
    }

    const answerTr = answers[id]?.tr || "";
    const answerEn = answers[id]?.en || "";

    if (!answerTr && !answerEn) {
      alert("Lütfen doğrulamak için bir cevap yazın.");
      return;
    }

    setLoading(prev => ({ ...prev, [id]: true }));

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

      const prompt = `
        ACT AS A PROFESSIONAL ANDROID INTERVIEW EXPERT.
        THE USER IS APPLYING FOR A ${userLevel.toUpperCase()} LEVEL POSITION.
        
        QUESTION: "${question}"
        USER'S RESPONSE (TURKISH): "${answerTr}"
        USER'S RESPONSE (ENGLISH): "${answerEn}"
        
        INSTRUCTIONS:
        1. Evaluate the user's answer based on technical accuracy and PROFESSIONALISM suitable for a ${userLevel} role.
        2. DO NOT EXAGGERATE OR BE OVERLY HARSH, especially for Junior roles. Focus on constructive growth.
        3. Provide brief feedback on the user's specific answers.
        4. Provide a "Master Answer" that represents a ${userLevel} level expected performance.
        5. Mention what would be added if they were Mid/Senior (if applicable, but keep the focus on ${userLevel}).
        
        MANDATORY: YOUR ENTIRE RESPONSE MUST BE IN ${feedbackLang.toUpperCase()}.
        USE CLEAN MARKDOWN FORMATTING.
      `;

      const result = await model.generateContent(prompt);
      const text = result.response.text();
      const timestamp = new Date().toLocaleString();

      const newEntry = {
        text,
        timestamp,
        level: userLevel,
        lang: feedbackLang
      };

      setAiHistory(prev => ({
        ...prev,
        [id]: [newEntry, ...(prev[id] || [])]
      }));

      // Set current view to the latest
      setAiFeedback(prev => ({
        ...prev,
        [id]: 0
      }));

    } catch (error) {
      console.error("AI Error:", error);
      alert("AI Analiz Hatası: " + error.message);
    } finally {
      setLoading(prev => ({ ...prev, [id]: false }));
    }
  };

  const scrollToSection = (sectionName) => {
    const element = sectionRefs.current[sectionName];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="app-layout">
      <motion.div className="progress-bar" style={{ scaleX }} />

      <aside className={`sidebar ${showMobileMenu ? 'mobile-open' : ''}`}>
        <div className="sidebar-title">
          <img src="/assets/logo.png" alt="Logo" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
          <span>Navigasyon</span>
        </div>
        <nav className="sidebar-nav">
          {questionData.map((section, idx) => {
            const stats = getSectionCompletion(section);
            return (
              <button
                key={idx}
                className={`sidebar-item ${activeSection === section.section ? 'active' : ''} ${stats.allDone ? 'completed' : ''}`}
                onClick={() => {
                  scrollToSection(section.section);
                  setShowMobileMenu(false);
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SectionIcon section={section.section} />
                  <span>{section.section}</span>
                </div>
                {stats.allDone ? (
                  <CheckCircle2 size={16} color="var(--android-green)" />
                ) : (
                  <span className="section-indicator" />
                )}
              </button>
            );
          })}
        </nav>
      </aside>

      {showMobileMenu && (
        <div className="mobile-overlay" onClick={() => setShowMobileMenu(false)} />
      )}

      <div className="nav-dots">
        {questionData.map((section, idx) => (
          <div
            key={idx}
            className={`dot ${activeSection === section.section ? 'active' : ''}`}
            data-label={section.section}
            onClick={() => scrollToSection(section.section)}
          />
        ))}
      </div>

      <div className="container">
        <header>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <button className="mobile-menu-toggle" onClick={() => setShowMobileMenu(true)}>
                <Menu size={24} />
              </button>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <img src="/assets/logo.png" className="header-logo" alt="Android Interview Master Logo" style={{ objectFit: 'contain' }} />
                <div>
                  <h1 className="header-title">Android Mülakat Uzmanı</h1>
                  <p className="subtitle">Modern Mülakat Hazırlık ve Vaka Çalışması</p>
                </div>
              </div>
            </div>

            <button
              className="theme-toggle"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              title={theme === 'light' ? 'Karanlık Moda Geç' : 'Aydınlık Moda Geç'}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </motion.div>
        </header>

        <main>
          <motion.div
            className="api-key-config"
            style={{ maxWidth: '100%' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3><Key size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }} /> AI Konfigürasyonu</h3>
            <div className="config-grid">
              <div className="input-group">
                <label style={{ fontSize: '0.7rem' }}>API Anahtarı</label>
                <input
                  type="password"
                  placeholder="Gemini API Key..."
                  className="api-key-input"
                  style={{ marginBottom: 0 }}
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label style={{ fontSize: '0.7rem' }}>Model</label>
                <div
                  className="api-key-input"
                  style={{ marginBottom: 0, background: 'var(--soft-bg)', display: 'flex', alignItems: 'center' }}
                >
                  gemini-3-flash-preview
                </div>
              </div>
              <div className="input-group">
                <label style={{ fontSize: '0.7rem' }}>Seviye</label>
                <select
                  className="api-key-input"
                  style={{ marginBottom: 0 }}
                  value={userLevel}
                  onChange={(e) => setUserLevel(e.target.value)}
                >
                  <option value="Junior">Junior</option>
                  <option value="Mid-level">Mid-level</option>
                  <option value="Senior">Senior</option>
                </select>
              </div>
              <div className="input-group">
                <label style={{ fontSize: '0.7rem' }}>Geri Bildirim Dili</label>
                <select
                  className="api-key-input"
                  style={{ marginBottom: 0 }}
                  value={feedbackLang}
                  onChange={(e) => setFeedbackLang(e.target.value)}
                >
                  <option value="Turkish">Türkçe</option>
                  <option value="English">English</option>
                </select>
              </div>
            </div>
          </motion.div>

          {questionData.map((section, sIdx) => {
            const stats = getSectionCompletion(section);
            return (
              <section
                key={sIdx}
                data-section={section.section}
                ref={el => sectionRefs.current[section.section] = el}
              >
                <div className="section-header">
                  <div style={{ background: 'var(--card-bg)', color: 'var(--android-green)', padding: '12px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                    <SectionIcon section={section.section} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <h2 className="section-title" style={{ margin: 0 }}>{section.section}</h2>
                      {stats.allDone && <CheckCircle2 size={24} color="var(--android-green)" />}
                    </div>
                    <div className="section-stats-detail">
                      <div className="stats-track">
                        <div className="stats-fill" style={{ width: `${(stats.completed / stats.total) * 100}%` }}></div>
                      </div>
                      <span>{stats.completed} / {stats.total} Soru Tamamlandı</span>
                    </div>
                  </div>
                </div>

                {section.questions.map((q, qIdx) => (
                  <motion.div
                    className="question-card"
                    key={q.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="question-text">
                      <span className="question-id">{q.id}</span>
                      {q.question}
                      {(answers[q.id]?.tr?.trim() || answers[q.id]?.en?.trim()) && (
                        <CheckCircle2 size={18} color="var(--android-green)" style={{ marginLeft: 'auto' }} />
                      )}
                    </div>

                    <div className="input-grid">
                      <div className="input-group">
                        <label><Globe size={14} /> Türkçe</label>
                        <textarea
                          placeholder="Cevabınız..."
                          value={answers[q.id]?.tr || ''}
                          onChange={(e) => handleInputChange(q.id, 'tr', e.target.value)}
                        />
                      </div>
                      <div className="input-group">
                        <label><Globe size={14} /> English</label>
                        <textarea
                          placeholder="Your answer..."
                          value={answers[q.id]?.en || ''}
                          onChange={(e) => handleInputChange(q.id, 'en', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="ai-verify-container">
                      <div className="ai-verify-actions">
                        <button
                          className="verify-btn"
                          onClick={() => verifyWithAI(q.id, q.question)}
                          disabled={loading[q.id]}
                          style={{ alignSelf: 'center' }}
                        >
                          {loading[q.id] ? <Loader2 className="animate-spin" size={18} /> : <Sparkles size={18} />}
                          AI ile Analiz Et
                        </button>

                        {aiHistory[q.id] && aiHistory[q.id].length > 0 && (
                          <div className="history-section">
                            <label className="history-label">Analiz Geçmişini Görüntüle</label>
                            <select
                              className="history-select"
                              value={aiFeedback[q.id] ?? ""}
                              onChange={(e) => setAiFeedback(prev => ({
                                ...prev,
                                [q.id]: e.target.value === "" ? null : Number(e.target.value)
                              }))}
                            >
                              <option value="">Analiz Seçin...</option>
                              {aiHistory[q.id].map((entry, idx) => (
                                <option key={idx} value={idx}>
                                  {entry.timestamp} ({entry.level} - {entry.lang})
                                </option>
                              ))}
                            </select>
                          </div>
                        )}
                      </div>

                      <AnimatePresence>
                        {aiHistory[q.id] && typeof aiFeedback[q.id] === 'number' && (
                          <motion.div
                            className="ai-feedback"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            style={{ marginTop: '20px' }}
                          >
                            <strong>AI Mentor Geri Bildirimi ({aiHistory[q.id][aiFeedback[q.id]].timestamp}):</strong>
                            <div className="markdown-content">
                              <ReactMarkdown>{aiHistory[q.id][aiFeedback[q.id]].text}</ReactMarkdown>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </section>
            );
          })}
        </main>

        <footer>
          <p>Android Mülakat Uzmanı • React & Gemini AI ile Geliştirilmiştir • {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
