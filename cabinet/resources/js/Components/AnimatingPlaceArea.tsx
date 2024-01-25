export default function AnimatingPlaceArea() {
    return (
        <div className="mx-auto mt-10 w-full max-w-sm rounded-md border border-gray-300 p-4">
        <div className="animate-pulse space-x-4">
          <div className="grid">
            <div className="flex">
              <div className="w-10 rounded-full bg-slate-200"></div>
              <div className="ms-4 w-full space-y-6">
                <div className="h-2 rounded bg-slate-200"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 h-2 rounded bg-slate-200"></div>
                    <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                  </div>
                  <div className="h-2 rounded bg-slate-200"></div>
                </div>
              </div>
            </div>
            <div className="mt-5 space-y-6 py-1">
              <div className="h-2 rounded bg-slate-200"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 h-2 rounded bg-slate-200"></div>
                  <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                </div>
                <div className="h-2 rounded bg-slate-200"></div>
              </div>
              <div className="h-2 rounded bg-slate-200"></div>
            </div>
          </div>
        </div>
      </div>
    );
}