import Layout from "../../components/layout"
import Timeline from "../../components/timeline"

export default function TimelinePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Timeline />
        </div>
      </div>
    </Layout>
  )
}

