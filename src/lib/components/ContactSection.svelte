<script lang="ts">
	import MotionReveal from '$lib/components/MotionReveal.svelte';
import { contactPrompts, emailHref, profile, socialChipTone, socialLinks } from '$lib/data/portfolio';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import { isValidEmail, sanitizePlainText } from '$lib/utils/sanitize';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let submitted = $state(false);
	let error = $state<string | null>(null);

	function handleSubmit(event: Event) {
		event.preventDefault();
		error = null;

		const nextName = sanitizePlainText(name, 200);
		const nextEmail = sanitizePlainText(email, 254).trim();
		const nextMessage = sanitizePlainText(message, 8000);

		if (nextName.length < 2) {
			error = 'Please add your name so I know who the message is from.';
			return;
		}

		if (!isValidEmail(nextEmail)) {
			error = 'Please enter a valid email address.';
			return;
		}

		if (nextMessage.length < 20) {
			error = 'Add a bit more detail so I can understand the project context.';
			return;
		}

		const subject = encodeURIComponent(`Portfolio inquiry from ${nextName}`);
		const body = encodeURIComponent(
			[`Hi Ofeoritse,`, '', nextMessage, '', `Reply to: ${nextEmail}`, `From: ${nextName}`].join(
				'\n'
			)
		);

	const composeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
		profile.email
	)}&su=${subject}&body=${body}`;

	window.location.href = composeUrl;
		submitted = true;
	}
</script>

<section
	id="contact"
	class="scroll-mt-28 px-4 py-24 sm:px-6 md:px-10 lg:px-14"
	aria-labelledby="contact-heading"
>
	<div class="mx-auto max-w-[88rem]">
		<MotionReveal>
			<div class="grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-end">
				<div>
					<p
						data-reveal
						class="font-mono text-[0.72rem] tracking-[0.32em] text-[color-mix(in_oklab,var(--accent-a)_92%,transparent)] uppercase"
					>
						Contact
					</p>
					<h2
						id="contact-heading"
						data-reveal
						class="mt-4 max-w-[11ch] font-display text-[clamp(2.9rem,5vw,4.8rem)] leading-[0.95] font-semibold tracking-[-0.05em]"
					>
						Bring me in when the product needs both polish and backbone.
					</h2>
				</div>

				<p
					data-reveal
					class="max-w-3xl text-[1.02rem] leading-relaxed text-[color-mix(in_oklab,var(--text)_74%,transparent)]"
				>
					{profile.availability}
				</p>
			</div>
		</MotionReveal>

		<div class="mt-12 grid gap-7 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
			<div class="space-y-5">
				<div class="glass-panel rounded-[2rem] p-6 sm:p-8">
					<p class="font-mono text-[0.68rem] tracking-[0.18em] text-[var(--text-muted)] uppercase">
						Best fit conversations
					</p>
					<ul
						class="mt-5 space-y-4 text-sm leading-relaxed text-[color-mix(in_oklab,var(--text)_76%,transparent)]"
					>
						{#each contactPrompts as prompt}
							<li class="flex gap-3">
								<span class="mt-1 h-2 w-2 rounded-full bg-[var(--accent-a)]"></span>
								<span>{prompt}</span>
							</li>
						{/each}
					</ul>
				</div>

				<div class="grid gap-5 sm:grid-cols-2">
					<div class="glass-panel rounded-[1.7rem] p-6">
						<p
							class="font-mono text-[0.68rem] tracking-[0.18em] text-[var(--text-muted)] uppercase"
						>
							Direct
						</p>
					<a
						href={emailHref}
						target="_blank"
						rel="noreferrer noopener"
						class="focus-ring mt-4 inline-block rounded text-base font-semibold"
					>
							{profile.email}
						</a>
						<p class="mt-3 text-sm text-[var(--text-muted)]">{profile.phone}</p>
					</div>

					<div class="glass-panel rounded-[1.7rem] p-6">
						<p
							class="font-mono text-[0.68rem] tracking-[0.18em] text-[var(--text-muted)] uppercase"
						>
							Documents
						</p>
						<a
							href={profile.resumeHref}
							class="focus-ring mt-4 inline-flex rounded text-base font-semibold underline underline-offset-4"
							download
						>
							Download resume
						</a>
						<p class="mt-3 text-sm text-[var(--text-muted)]">Updated 2026 portfolio resume.</p>
					</div>
				</div>

				<div class="glass-panel rounded-[1.7rem] p-6">
					<p class="font-mono text-[0.68rem] tracking-[0.18em] text-[var(--text-muted)] uppercase">
						Contact rails
					</p>
					<div class="mt-4 flex flex-wrap gap-3">
						{#each socialLinks as link}
							<a
								href={link.href}
								target={link.external ? '_blank' : undefined}
								rel={link.external ? 'noreferrer noopener' : undefined}
								class="focus-ring inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[0.7rem] font-medium tracking-wide {socialChipTone[link.platform]}"
							>
								<SocialIcon platform={link.platform} />
								{link.label}
							</a>
						{/each}
					</div>
				</div>
			</div>

			<form
				class="glass-panel rounded-[2rem] p-6 sm:p-8"
				onsubmit={handleSubmit}
				novalidate
				aria-describedby={error ? 'contact-error' : undefined}
			>
				<p class="font-mono text-[0.68rem] tracking-[0.18em] text-[var(--text-muted)] uppercase">
					Compose a project brief
				</p>
				<p
					class="mt-3 max-w-2xl text-sm leading-relaxed text-[color-mix(in_oklab,var(--text)_76%,transparent)]"
				>
				This form opens a prefilled email draft in Gmail, so no keys are exposed in the client. It
				is simple on purpose and easy to replace with a server action later.
				</p>

				<div class="mt-7 grid gap-4">
					<label
						class="grid gap-2 font-mono text-[0.7rem] tracking-[0.16em] text-[var(--text-muted)] uppercase"
					>
						Name
						<input
							name="name"
							autocomplete="name"
							bind:value={name}
							class="focus-ring rounded-xl border border-[var(--glass-border)] bg-[var(--surface-1)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)]"
							placeholder="Your name"
						/>
					</label>

					<label
						class="grid gap-2 font-mono text-[0.7rem] tracking-[0.16em] text-[var(--text-muted)] uppercase"
					>
						Email
						<input
							name="email"
							type="email"
							autocomplete="email"
							bind:value={email}
							class="focus-ring rounded-xl border border-[var(--glass-border)] bg-[var(--surface-1)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)]"
							placeholder="you@company.com"
						/>
					</label>

					<label
						class="grid gap-2 font-mono text-[0.7rem] tracking-[0.16em] text-[var(--text-muted)] uppercase"
					>
						Project context
						<textarea
							name="message"
							rows="7"
							bind:value={message}
							class="focus-ring resize-y rounded-xl border border-[var(--glass-border)] bg-[var(--surface-1)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)]"
							placeholder="What are you building, what is the timeline, and where do you need help?"
						></textarea>
					</label>
				</div>

				{#if error}
					<p id="contact-error" class="mt-4 text-sm text-[var(--danger)]" role="alert">
						{error}
					</p>
				{/if}

				{#if submitted && !error}
					<p class="mt-4 text-sm text-[var(--success)]" role="status">
						If your mail app opened, the draft is ready. If not, you can still reach me directly at
						{profile.email}.
					</p>
				{/if}

				<div class="mt-6 flex flex-wrap gap-3">
					<button
						type="submit"
						class="focus-ring inline-flex min-h-[3.35rem] items-center justify-center rounded-xl bg-[var(--text)] px-6 text-sm font-semibold text-[var(--surface-0)] transition-[opacity,transform] duration-200 [transition-duration:calc(200ms*var(--motion))] hover:-translate-y-0.5 hover:opacity-95"
					>
						Open email draft
					</button>
				</div>
			</form>
		</div>
	</div>
</section>
