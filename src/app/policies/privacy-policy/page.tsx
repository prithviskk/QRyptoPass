import React from 'react'

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-[#2FF454] text-[#1C3334] px-6 py-10 md:px-20 lg:px-40 font-sans">
      <div className="bg-white/90 rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
        <h1 className="text-3xl md:text-5xl font-bold text-[#2E151B]">Privacy Policy</h1>
        
        <p className="text-md md:text-lg leading-relaxed text-[#33376E]">
          Welcome to <strong>QRyptoPass</strong>, your trusted decentralized ticket booking solution powered by blockchain technology. 
          Your privacy is critically important to us. This Privacy Policy outlines how we collect, use, and protect your information when you interact with our application.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-[#3DA7B9]">1. Information We Collect</h2>
          <ul className="list-disc ml-6 text-[#33376E] mt-2 space-y-1">
            <li><strong>Wallet Address:</strong> Required for identification and ticket ownership on blockchain.</li>
            <li><strong>Event Interaction Data:</strong> Information about the tickets you book and events you attend (movies, sports, plays, etc.).</li>
            <li><strong>QR Data:</strong> Unique ticket QR codes stored securely on-chain.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#3DA7B9]">2. Use of Information</h2>
          <p className="text-[#33376E] mt-2">
            All data is stored immutably on the blockchain. We do not collect or store your personal details like name, email, or location.
            Your wallet address is used solely to process bookings and generate secure QR tickets.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#3DA7B9]">3. Security</h2>
          <p className="text-[#33376E] mt-2">
            Blockchain ensures that your ticket information is tamper-proof and accessible only via your wallet. All transactions are encrypted.
            QRyptoPass does not store private keys or sensitive personal data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#3DA7B9]">4. Data Sharing</h2>
          <p className="text-[#33376E] mt-2">
            We do not sell or share your data with third parties. As a decentralized platform, your activity is peer-to-peer and transparent on-chain.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#3DA7B9]">5. Cookies and Analytics</h2>
          <p className="text-[#33376E] mt-2">
            QRyptoPass does not use traditional cookies. For performance optimization, basic analytics may be used without tracking individual users.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#3DA7B9]">6. Changes to This Policy</h2>
          <p className="text-[#33376E] mt-2">
            This Privacy Policy may be updated as we evolve. We recommend checking this page regularly to stay informed about how we handle your data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#3DA7B9]">7. Contact</h2>
          <p className="text-[#33376E] mt-2">
            For questions or concerns, contact us through our support smart contract or community DAO channel.
          </p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage
