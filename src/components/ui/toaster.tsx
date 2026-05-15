import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";
import { CheckCircle2 } from "lucide-react";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        const isSuccess = props.variant === "success";

        return (
          <Toast key={id} {...props}>
            {isSuccess && (
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                <CheckCircle2 size={20} />
              </div>
            )}
            <div className="grid gap-1 pr-2">
              {title && <ToastTitle className={isSuccess ? "text-sm font-bold text-slate-950" : undefined}>{title}</ToastTitle>}
              {description && (
                <ToastDescription className={isSuccess ? "text-sm leading-5 text-slate-600 opacity-100" : undefined}>
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
