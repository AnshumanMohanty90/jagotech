import React from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

// Video file versions: bump when a video is replaced so browsers fetch the new file.
const VERSION = { ask: "v3", analyze: "v3", predict: "v3", automate: "v3" };

// Pop-up player for a module's "how it works" video. `module` is { id, title } or null.
export default function ModuleVideoDialog({ module, onClose, triggerRef }) {
  return (
    <Dialog open={!!module} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        onCloseAutoFocus={(e) => {
          if (triggerRef?.current) {
            e.preventDefault();
            triggerRef.current.focus();
          }
        }}
        className="max-h-[92vh] w-[calc(100%-2rem)] max-w-4xl gap-0 overflow-hidden rounded-2xl border-[#2f3641] bg-[#0b0d10] p-0 focus:outline-none [&>button:last-child]:hidden"
      >
        {module && (
          <>
            <div className="flex items-center justify-between gap-4 border-b border-[#2f3641] px-5 py-3">
              <DialogTitle className="font-ui text-base font-bold text-foreground">{module.title}: how it works</DialogTitle>
              <DialogClose className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-[#2f3641] px-3 font-ui text-sm font-semibold text-foreground hover:border-primary hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <X aria-hidden="true" className="h-4 w-4" />
                Close
              </DialogClose>
            </div>
            <DialogDescription className="sr-only">A short video showing how the {module.title} module works.</DialogDescription>
            <video
              key={module.id}
              className="block aspect-video w-full bg-black"
              src={`/videos/modules/${module.id}-${VERSION[module.id]}.mp4`}
              poster={`/videos/modules/${module.id}-${VERSION[module.id]}-poster.jpg`}
              controls
              autoPlay
              playsInline
              preload="metadata"
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
