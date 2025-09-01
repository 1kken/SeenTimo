export function TransparencyNotice() {
  return (
    <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-blue-900">Transparency & Accountability</h3>
          <p className="text-sm text-blue-700 mt-1">
            All transactions are permanently recorded on the blockchain and publicly viewable. This ensures complete
            transparency in government fund allocation and helps build public trust.
          </p>
        </div>
      </div>
    </div>
  )
}
