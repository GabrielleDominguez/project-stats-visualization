import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const ProjectManagementStatsVisual = () => {
  // Sample data for project management platforms (Nominal data) - Updated with palette colors
  const platformData = [
    { platform: 'MS Project', projects: 45, color: '#006064' }, // Dark teal
    { platform: 'Asana', projects: 62, color: '#00695C' }, // Dark teal-green
    { platform: 'Jira', projects: 38, color: '#2E7D32' }, // Dark green
    { platform: 'Trello', projects: 55, color: '#388E3C' } // Medium green
  ];

  // Sample data for success rate histogram (Ratio data) - Updated with palette gradient
  const successRateData = [
    { range: '0-20%', frequency: 8, color: '#B0BEC5' }, // Light gray-blue
    { range: '21-40%', frequency: 15, color: '#80CBC4' }, // Light teal
    { range: '41-60%', frequency: 32, color: '#4DB6AC' }, // Medium teal
    { range: '61-80%', frequency: 28, color: '#26A69A' }, // Darker teal
    { range: '81-100%', frequency: 17, color: '#00695C' } // Dark teal-green
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-slate-200 rounded-xl shadow-2xl backdrop-blur-sm">
          <p className="font-bold text-slate-800">{`${label}`}</p>
          <p className="text-slate-600 mt-1">
            {`${payload[0].dataKey === 'projects' ? 'Projects: ' : 'Projects in range: '}${payload[0].value}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-8 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 rounded-2xl shadow-2xl border border-slate-100">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
          Project Management Tools & Success Analysis
        </h1>
        <p className="text-xl text-slate-700 font-medium">
          Elementary Statistics - Week 1 Discussion Visual
        </p>
        <div className="mt-4 inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full border border-blue-200">
          <p className="text-sm text-slate-600 font-medium">
            Demonstrating Nominal Data (Bar Graph) & Ratio Data (Histogram)
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Bar Graph for Platform Adoption */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Project Management Platform Adoption
            </h2>
            <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full border border-blue-200">
              <span className="text-sm font-semibold text-blue-700">Nominal Data:</span>
              <span className="text-sm text-blue-600 ml-1">Distinct categories without ranking</span>
            </div>
          </div>
          
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={platformData} margin={{ top: 20, right: 30, left: 60, bottom: 80 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.6} />
              <XAxis 
                dataKey="platform" 
                tick={{ fontSize: 13, fill: '#475569' }}
                angle={-45}
                textAnchor="end"
                height={80}
                axisLine={{ stroke: '#cbd5e1' }}
              />
              <YAxis 
                label={{ value: 'Number of Projects', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#475569' } }}
                tick={{ fontSize: 13, fill: '#475569' }}
                axisLine={{ stroke: '#cbd5e1' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="projects" radius={[8, 8, 0, 0]} strokeWidth={2} stroke="#fff">
                {platformData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          
          <div className="mt-2 p-3 bg-slate-50 rounded-lg border border-slate-200">
            <p className="text-sm text-slate-600 text-center">
              The bar graph shows adoption rates for project management tools, helping stakeholders quickly see which platforms are most popular for smarter software investment decisions.
            </p>
          </div>
        </div>

        {/* Histogram for Success Rates */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Project Milestone Completion Distribution
            </h2>
            <div className="inline-flex items-center px-3 py-1 bg-emerald-50 rounded-full border border-emerald-200">
              <span className="text-sm font-semibold text-emerald-700">Ratio Data:</span>
              <span className="text-sm text-emerald-600 ml-1">Projects grouped by milestone completion percentage</span>
            </div>
          </div>
          
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={successRateData} margin={{ top: 20, right: 30, left: 60, bottom: 80 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.6} />
              <XAxis 
                dataKey="range" 
                tick={{ fontSize: 13, fill: '#475569' }}
                label={{ value: 'Milestone Completion %', position: 'insideBottom', offset: -15, style: { textAnchor: 'middle', fill: '#475569' } }}
                axisLine={{ stroke: '#cbd5e1' }}
                height={80}
              />
              <YAxis 
                label={{ value: 'Number of Projects', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#475569' } }}
                tick={{ fontSize: 13, fill: '#475569' }}
                axisLine={{ stroke: '#cbd5e1' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="frequency" radius={[8, 8, 0, 0]} strokeWidth={2} stroke="#fff">
                {successRateData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          
          <div className="mt-2 p-3 bg-slate-50 rounded-lg border border-slate-200">
            <p className="text-sm text-slate-600 text-center">
              The histogram shows how consistently teams meet milestones, revealing patterns in performance that highlight risks to project timelines.
            </p>
          </div>
        </div>
      </div>

      {/* Key Insights Section */}
      <div className="mt-6 bg-gradient-to-r from-white to-slate-50 rounded-2xl p-8 shadow-xl border border-slate-100">
        <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Key Statistical Insights</h3>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
            <h4 className="font-bold text-blue-700 mb-4 text-lg flex items-center">
              <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
              Bar Graph Analysis
            </h4>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 mt-1">▪</span>
                <span>Asana shows highest adoption (62 projects)</span>
              </li>
              <li className="flex items-start">
                <span className="text-violet-500 mr-2 mt-1">▪</span>
                <span>Trello follows closely (55 projects)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">▪</span>
                <span>Clear visual comparison of platform usage</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">▪</span>
                <span>Nominal data: categories can't be ranked</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100">
            <h4 className="font-bold text-emerald-700 mb-4 text-lg flex items-center">
              <div className="w-4 h-4 bg-emerald-500 rounded mr-2"></div>
              Histogram Analysis
            </h4>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2 mt-1">▪</span>
                <span>32 projects completed 41-60% of milestones on time</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">▪</span>
                <span>28 projects completed 61-80% of milestones on time</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">▪</span>
                <span>Shows distribution of milestone completion rates</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">▪</span>
                <span>Ratio data: 0% means no milestones completed on time</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <div className="inline-flex flex-col items-center px-6 py-4 bg-gradient-to-r from-slate-100 to-slate-50 rounded-xl border border-slate-200">
          <p className="text-sm font-semibold text-slate-700">Florida Southern College - Elementary Statistics Course</p>
          <p className="text-xs text-slate-500 mt-1">Hypothetical dataset created for educational demonstration</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagementStatsVisual;