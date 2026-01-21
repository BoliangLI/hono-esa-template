import { Hono } from "hono"

const app = new Hono()

app.use('/' , async(c,next)=>{
  c.setRenderer((content)=>{
    return c.html(
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Hono ESA Template</title>
          <link href="/static/style.css" rel="stylesheet" />
        </head>
        <body>
          {content}
        </body>
      </html>
    )
  })
  await next()
})

app.get('/', (c) => {
  const esaConfig = {
    name: "hono-esa-template",
    entry: "./src/functions/index.js",
    installCommand: "npm install",
    buildCommand: "npm run build",
    assets: {
      directory: "./dist",
      notFoundStrategy: "404Page"
    }
  }

  const directoryTree = `
hono-esa-template/
├── dist/              # 构建输出目录
│   ├── index.html
│   └── static/
│       └── style.css
├── public/            # 静态资源目录
│   └── static/
│       └── style.css
├── src/               # 源代码目录
│   ├── functions/     # ESA 边缘函数
│   │   ├── index.js   # 函数入口
│   │   └── ssr.js     # SSR 测试路由
│   └── index.tsx      # Vite SSG 页面入口
├── esa.jsonc          # ESA 配置文件
├── package.json       # 项目配置
├── vite.config.ts     # Vite 配置
└── tsconfig.json      # TypeScript 配置
  `.trim()

  return c.render(
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333'
    }}>
      <header style={{
        marginBottom: '3rem',
        paddingBottom: '2rem',
        borderBottom: '2px solid #e0e0e0'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          margin: '0 0 0.5rem 0',
          color: '#2563eb',
          fontWeight: '700'
        }}>Hono + Vite + ESA Pages Template</h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#666',
          margin: '0'
        }}>基于 Hono + Vite + ESA Pages 的现代化模板项目</p>
      </header>

      {/* <div style={{
        marginBottom: '2rem',
        padding: '1rem 1.5rem',
        backgroundColor: '#ecfdf5',
        border: '1px solid #10b981',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        <span style={{
          fontSize: '1.5rem'
        }}>✨</span>
        <p style={{
          margin: '0',
          fontSize: '1rem',
          color: '#065f46',
          fontWeight: '500'
        }}>
          <strong>当前页面为 Vite SSG 构建</strong> - 此页面通过 Vite 静态站点生成（SSG）技术预渲染生成
        </p>
      </div> */}

<section style={{
        marginBottom: '3rem',
        backgroundColor: '#f8f9fa',
        padding: '2rem',
        borderRadius: '8px',
        border: '1px solid #e0e0e0'
      }}>
        <h2 style={{
          fontSize: '1.8rem',
          marginTop: '0',
          marginBottom: '1.5rem',
          color: '#1a1a1a'
        }}>🛣️ 项目路由说明</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          <div style={{
            padding: '1.5rem',
            backgroundColor: '#fff',
            borderRadius: '6px',
            border: '1px solid #d1d5db',
            borderLeft: '4px solid #10b981'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '0.5rem'
            }}>
              <code style={{
                padding: '0.25rem 0.75rem',
                backgroundColor: '#f3f4f6',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: '600',
                color: '#1f2937',
                fontFamily: '"Fira Code", "Consolas", "Monaco", monospace'
              }}>/</code>
              <span style={{
                fontSize: '0.875rem',
                color: '#10b981',
                fontWeight: '600',
                backgroundColor: '#ecfdf5',
                padding: '0.25rem 0.5rem',
                borderRadius: '4px'
              }}>静态页面</span>
            </div>
            <p style={{
              margin: '0',
              color: '#4b5563',
              fontSize: '1rem',
              lineHeight: '1.6'
            }}>
              静态页面，由 <strong>Vite SSG</strong> 生成。在构建时预渲染，提供最佳的性能和 SEO 优化。
            </p>
          </div>

          <div style={{
            padding: '1.5rem',
            backgroundColor: '#fff',
            borderRadius: '6px',
            border: '1px solid #d1d5db',
            borderLeft: '4px solid #2563eb'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '0.5rem'
            }}>
              <code style={{
                padding: '0.25rem 0.75rem',
                backgroundColor: '#f3f4f6',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: '600',
                color: '#1f2937',
                fontFamily: '"Fira Code", "Consolas", "Monaco", monospace'
              }}>/ssr/*</code>
              <span style={{
                fontSize: '0.875rem',
                color: '#2563eb',
                fontWeight: '600',
                backgroundColor: '#eff6ff',
                padding: '0.25rem 0.5rem',
                borderRadius: '4px'
              }}>动态页面</span>
            </div>
            <p style={{
              margin: '0',
              color: '#4b5563',
              fontSize: '1rem',
              lineHeight: '1.6'
            }}>
              动态页面，由 <strong>ESA 边缘函数</strong> 处理。可以根据用户传参动态渲染页面，支持服务端渲染（SSR）。
            </p>
            <div style={{
              marginTop: '0.75rem',
              padding: '0.75rem',
              backgroundColor: '#f9fafb',
              borderRadius: '4px',
              fontSize: '0.875rem',
              color: '#6b7280'
            }}>
              <strong>示例：</strong>
              <code style={{
                marginLeft: '0.5rem',
                color: '#2563eb',
                fontFamily: '"Fira Code", "Consolas", "Monaco", monospace'
              }}>/ssr/test</code> - 渲染 "Hello test - This is SSR Page!"
            </div>
          </div>
        </div>
      </section>


      <section style={{
        marginBottom: '3rem',
        backgroundColor: '#f8f9fa',
        padding: '2rem',
        borderRadius: '8px',
        border: '1px solid #e0e0e0'
      }}>
        <h2 style={{
          fontSize: '1.8rem',
          marginTop: '0',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>📁 项目目录结构</h2>
        <pre style={{
          backgroundColor: '#1e1e1e',
          color: '#d4d4d4',
          padding: '1.5rem',
          borderRadius: '6px',
          overflow: 'auto',
          fontSize: '0.9rem',
          lineHeight: '1.5',
          fontFamily: '"Fira Code", "Consolas", "Monaco", monospace',
          margin: '0'
        }}>{directoryTree}</pre>
      </section>

      <section style={{
        marginBottom: '3rem',
        backgroundColor: '#f8f9fa',
        padding: '2rem',
        borderRadius: '8px',
        border: '1px solid #e0e0e0'
      }}>
        <h2 style={{
          fontSize: '1.8rem',
          marginTop: '0',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>⚙️ ESA 配置信息</h2>
        <pre style={{
          backgroundColor: '#1e1e1e',
          color: '#d4d4d4',
          padding: '1.5rem',
          borderRadius: '6px',
          overflow: 'auto',
          fontSize: '0.9rem',
          lineHeight: '1.5',
          fontFamily: '"Fira Code", "Consolas", "Monaco", monospace',
          margin: '0'
        }}>{JSON.stringify(esaConfig, null, 2)}</pre>
      </section>

      <section style={{
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#f0f9ff',
        borderRadius: '8px',
        border: '2px solid #2563eb'
      }}>
        <h2 style={{
          fontSize: '1.8rem',
          marginTop: '0',
          marginBottom: '1.5rem',
          color: '#1a1a1a'
        }}>🚀 快速开始</h2>
        <p style={{
          fontSize: '1.1rem',
          marginBottom: '2rem',
          color: '#666'
        }}>测试 SSR 功能，体验服务端渲染</p>
        <a href="/ssr/test" style={{
          display: 'inline-block',
          padding: '0.875rem 2rem',
          backgroundColor: '#2563eb',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '6px',
          fontSize: '1.1rem',
          fontWeight: '600',
          transition: 'all 0.2s ease',
          boxShadow: '0 2px 4px rgba(37, 99, 235, 0.2)',
          cursor: 'pointer'
        }}>
          跳转到 SSR 测试页面 →
        </a>
        <style>{`
          a[href="/ssr/test"]:hover {
            background-color: #1d4ed8 !important;
            transform: translateY(-1px);
            box-shadow: 0 4px 8px rgba(37, 99, 235, 0.3) !important;
          }
          a[href="/ssr/test"]:active {
            transform: translateY(0);
          }
        `}</style>
      </section>

      <footer style={{
        marginTop: '3rem',
        paddingTop: '2rem',
        borderTop: '1px solid #e0e0e0',
        textAlign: 'center',
        color: '#999',
        fontSize: '0.9rem'
      }}>
        <p>使用 Hono + Vite + ESA 构建 | 模板项目</p>
      </footer>
    </div>
  )
})

export default app