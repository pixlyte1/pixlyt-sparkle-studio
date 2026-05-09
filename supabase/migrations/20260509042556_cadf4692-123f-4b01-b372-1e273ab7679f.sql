CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  recaptcha_score NUMERIC,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- No public policies: only service role (used by the edge function) can read/write.
-- This keeps stored submissions private.
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions (created_at DESC);