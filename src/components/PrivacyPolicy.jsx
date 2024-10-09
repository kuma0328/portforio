import React from "react";

function PrivacyPolicy() {
  return (
    <div className="flex flex-col p-6 bg-white max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        プライバシーポリシー
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">1. 収集する情報</h2>
        <p className="text-gray-700 leading-relaxed">
          当アプリケーションは、ユーザーの目標設定とタスク管理を支援するために、以下の情報を収集します：
          <br />- ユーザーが入力した目標とタスク
          <br />- アプリの使用状況データ
          <br />- デバイス情報（OSバージョン、アプリバージョンなど）
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">2. 情報の使用目的</h2>
        <p className="text-gray-700 leading-relaxed">
          収集した情報は以下の目的で使用されます：
          <br />- アプリの機能提供とパフォーマンス向上
          <br />- ユーザーエクスペリエンスの改善
          <br />- カスタマーサポートの提供
          <br />- 新機能の開発
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">3. 情報の共有</h2>
        <p className="text-gray-700 leading-relaxed">
          当社は、法的要請がある場合を除き、ユーザーの個人情報を第三者と共有しません。
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">4. データセキュリティ</h2>
        <p className="text-gray-700 leading-relaxed">
          ユーザーのデータを保護するため、適切なセキュリティ対策を講じています。ただし、インターネット上の通信において完全な安全性を保証することはできません。
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">5. ユーザーの権利</h2>
        <p className="text-gray-700 leading-relaxed">
          ユーザーは自身の個人情報へのアクセス、訂正、削除を要求する権利を有しています。これらの要求については、アプリ内の設定またはサポート窓口にお問い合わせください。
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">6. ポリシーの変更</h2>
        <p className="text-gray-700 leading-relaxed">
          本プライバシーポリシーは変更される可能性があります。重要な変更がある場合は、アプリ内で通知いたします。
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">7. お問い合わせ</h2>
        <p className="text-gray-700 leading-relaxed">
          プライバシーポリシーに関するご質問やお問い合わせは、以下の連絡先までお願いいたします：
          <br />
          Email: nhayato28@gmail.com
        </p>
      </section>

      <footer className="text-sm text-gray-500 text-center mt-8">
        最終更新日: 2024年10月9日
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
