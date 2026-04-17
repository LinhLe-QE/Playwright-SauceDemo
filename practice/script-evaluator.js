#!/usr/bin/env node

/**
 * Script Evaluator - Automation Skills Assessment Tool
 * Evaluates JavaScript files for automation best practices
 */

const fs = require('fs');
const path = require('path');

class ScriptEvaluator {
    constructor() {
        this.metrics = {
            errorHandling: 0,
            logging: 0,
            modularity: 0,
            documentation: 0,
            testing: 0,
            performance: 0,
            security: 0,
            maintainability: 0
        };

        this.suggestions = [];
        this.score = 0;
    }

    evaluateFile(filePath) {
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            console.log(`\n🔍 Evaluating: ${filePath}`);
            console.log('='.repeat(50));

            this.analyzeErrorHandling(content);
            this.analyzeLogging(content);
            this.analyzeModularity(content);
            this.analyzeDocumentation(content);
            this.analyzeTesting(content);
            this.analyzePerformance(content);
            this.analyzeSecurity(content);
            this.analyzeMaintainability(content);

            this.calculateScore();
            this.generateReport();

        } catch (error) {
            console.error(`❌ Error reading file ${filePath}:`, error.message);
        }
    }

    analyzeErrorHandling(content) {
        const tryCatchBlocks = (content.match(/try\s*\{/g) || []).length;
        const catchBlocks = (content.match(/catch\s*\(/g) || []).length;
        const errorHandling = (content.match(/error|Error/g) || []).length;

        let score = 0;
        if (tryCatchBlocks > 0 && catchBlocks > 0) score += 30;
        if (errorHandling > 0) score += 20;
        if (content.includes('throw new Error')) score += 25;
        if (content.includes('console.error')) score += 25;

        this.metrics.errorHandling = Math.min(score, 100);

        if (score < 50) {
            this.suggestions.push('⚠️  Add proper error handling with try-catch blocks');
        }
    }

    analyzeLogging(content) {
        const consoleLogs = (content.match(/console\.log/g) || []).length;
        const consoleErrors = (content.match(/console\.error/g) || []).length;
        const consoleWarns = (content.match(/console\.warn/g) || []).length;

        let score = 0;
        if (consoleLogs > 0) score += 30;
        if (consoleErrors > 0) score += 30;
        if (consoleWarns > 0) score += 20;
        if (content.includes('logger') || content.includes('winston')) score += 20;

        this.metrics.logging = Math.min(score, 100);

        if (score < 40) {
            this.suggestions.push('📝 Add comprehensive logging for debugging and monitoring');
        }
    }

    analyzeModularity(content) {
        const functions = (content.match(/function\s+\w+|const\s+\w+\s*=\s*\(/g) || []).length;
        const imports = (content.match(/require\(|import\s+/g) || []).length;
        const exports = (content.match(/module\.exports|export\s+/g) || []).length;

        let score = 0;
        if (functions > 2) score += 30;
        if (imports > 0) score += 25;
        if (exports > 0) score += 25;
        if (content.includes('class ')) score += 20;

        this.metrics.modularity = Math.min(score, 100);

        if (score < 50) {
            this.suggestions.push('🔧 Break down code into reusable functions and modules');
        }
    }

    analyzeDocumentation(content) {
        const comments = (content.match(/\/\/|\/\*|\*\//g) || []).length;
        const jsdoc = (content.match(/\/\*\*|\* @/g) || []).length;
        const readme = content.includes('README') || content.includes('readme');

        let score = 0;
        if (comments > 5) score += 30;
        if (jsdoc > 0) score += 30;
        if (readme) score += 20;
        if (content.includes('TODO') || content.includes('FIXME')) score += 20;

        this.metrics.documentation = Math.min(score, 100);

        if (score < 40) {
            this.suggestions.push('📚 Add comments and documentation to explain code logic');
        }
    }

    analyzeTesting(content) {
        const testFiles = content.includes('test') || content.includes('spec');
        const assertions = (content.match(/assert|expect|should/g) || []).length;
        const describe = (content.match(/describe\(/g) || []).length;
        const it = (content.match(/it\(/g) || []).length;

        let score = 0;
        if (testFiles) score += 40;
        if (assertions > 0) score += 30;
        if (describe > 0) score += 15;
        if (it > 0) score += 15;

        this.metrics.testing = Math.min(score, 100);

        if (score < 30) {
            this.suggestions.push('🧪 Add unit tests to ensure code reliability');
        }
    }

    analyzePerformance(content) {
        const loops = (content.match(/for\s*\(|while\s*\(|forEach/g) || []).length;
        const async = (content.match(/async|await|Promise/g) || []).length;
        const efficient = content.includes('map') || content.includes('filter') || content.includes('reduce');

        let score = 0;
        if (loops > 0) score += 25;
        if (async > 0) score += 25;
        if (efficient) score += 25;
        if (content.includes('setTimeout') || content.includes('setInterval')) score += 25;

        this.metrics.performance = Math.min(score, 100);

        if (score < 50) {
            this.suggestions.push('⚡ Consider performance optimizations and async operations');
        }
    }

    analyzeSecurity(content) {
        const validation = (content.match(/validate|check|verify/g) || []).length;
        const sanitize = (content.match(/sanitize|escape|encode/g) || []).length;
        const secure = content.includes('https') || content.includes('secure');

        let score = 0;
        if (validation > 0) score += 30;
        if (sanitize > 0) score += 30;
        if (secure) score += 20;
        if (content.includes('process.env')) score += 20;

        this.metrics.security = Math.min(score, 100);

        if (score < 40) {
            this.suggestions.push('🔒 Add input validation and security measures');
        }
    }

    analyzeMaintainability(content) {
        const length = content.length;
        const lines = content.split('\n').length;
        const complexity = (content.match(/if\s*\(|else\s*if|switch/g) || []).length;

        let score = 100;
        if (length > 1000) score -= 20;
        if (lines > 100) score -= 20;
        if (complexity > 10) score -= 20;
        if (content.includes('TODO') || content.includes('FIXME')) score -= 10;

        this.metrics.maintainability = Math.max(score, 0);

        if (score < 70) {
            this.suggestions.push('🧹 Refactor code for better maintainability and readability');
        }
    }

    calculateScore() {
        const total = Object.values(this.metrics).reduce((sum, score) => sum + score, 0);
        this.score = Math.round(total / Object.keys(this.metrics).length);
    }

    generateReport() {
        console.log('\n📊 EVALUATION RESULTS');
        console.log('='.repeat(50));

        console.log(`Overall Score: ${this.score}/100`);

        if (this.score >= 80) {
            console.log('🏆 EXCELLENT - Your script follows automation best practices!');
        } else if (this.score >= 60) {
            console.log('✅ GOOD - Your script has solid foundations with room for improvement');
        } else if (this.score >= 40) {
            console.log('⚠️  FAIR - Your script needs improvements for production use');
        } else {
            console.log('❌ NEEDS WORK - Your script requires significant improvements');
        }

        console.log('\n📈 DETAILED METRICS:');
        console.log(`Error Handling: ${this.metrics.errorHandling}/100`);
        console.log(`Logging: ${this.metrics.logging}/100`);
        console.log(`Modularity: ${this.metrics.modularity}/100`);
        console.log(`Documentation: ${this.metrics.documentation}/100`);
        console.log(`Testing: ${this.metrics.testing}/100`);
        console.log(`Performance: ${this.metrics.performance}/100`);
        console.log(`Security: ${this.metrics.security}/100`);
        console.log(`Maintainability: ${this.metrics.maintainability}/100`);

        if (this.suggestions.length > 0) {
            console.log('\n💡 IMPROVEMENT SUGGESTIONS:');
            this.suggestions.forEach(suggestion => console.log(suggestion));
        }

        console.log('\n' + '='.repeat(50));
    }
}

// Main execution
function main() {
    const evaluator = new ScriptEvaluator();

    if (process.argv.length < 3) {
        console.log('Usage: node script-evaluator.js <file-path>');
        console.log('Example: node script-evaluator.js js/find3ConsecutivePairs.js');
        process.exit(1);
    }

    const filePath = process.argv[2];
    evaluator.evaluateFile(filePath);
}

if (require.main === module) {
    main();
}

module.exports = ScriptEvaluator; 