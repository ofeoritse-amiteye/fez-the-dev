<script lang="ts">
	import ButtonIcon from '$lib/components/ButtonIcon.svelte';
	import MotionReveal from '$lib/components/MotionReveal.svelte';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import { emailHref, profile, socialLinks } from '$lib/data/portfolio';
	import { externalAnchorProps } from '$lib/utils/external-link';
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
			error = 'Please add your name.';
			return;
		}

		if (!isValidEmail(nextEmail)) {
			error = 'Please enter a valid email address.';
			return;
		}

		if (nextMessage.length < 20) {
			error = 'Add a bit more detail about the project.';
			return;
		}

		const subject = encodeURIComponent(`Portfolio inquiry from ${nextName}`);
		const body = encodeURIComponent(
			[`Hi Ofeoritse,`, '', nextMessage, '', `Reply to: ${nextEmail}`, `From: ${nextName}`].join(
				'\n'
			)
		);

		window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
			profile.email
		)}&su=${subject}&body=${body}`;
		submitted = true;
	}
</script>

<section id="contact" class="section-wrap section-pad scroll-mt-24" aria-labelledby="contact-heading">
	<MotionReveal>
		<div class="flex flex-wrap items-end justify-between gap-4">
			<h2 id="contact-heading" data-reveal class="section-title">Contact</h2>
			<span data-reveal class="chip chip-grape">Say hi</span>
		</div>
		<p data-reveal class="text-muted mt-4 max-w-xl text-base leading-relaxed">
			{profile.availability}
		</p>

		<div class="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-10">
			<div data-reveal class="card-surface bg-[var(--aqua)] p-5 sm:p-6">
				<p class="font-display text-xs font-extrabold tracking-widest uppercase">Direct links</p>
				<ul class="mt-4 flex flex-wrap gap-2">
					{#each socialLinks as link}
						<li>
							<a
								href={link.href}
								class="btn-sticker btn-paper focus-ring !min-h-10 !px-4 !text-[0.7rem]"
								{...externalAnchorProps(link.href)}
							>
								<SocialIcon platform={link.platform} />
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
				<p class="mt-6 text-sm font-semibold">
					<a href={emailHref} class="link-accent focus-ring">{profile.email}</a>
				</p>
				<p class="text-muted mt-2 text-sm">{profile.phone}</p>
			</div>

			<form
				data-reveal
				class="card-surface p-5 sm:p-6"
				onsubmit={handleSubmit}
				novalidate
				aria-describedby={error ? 'contact-error' : undefined}
			>
				<p class="font-display text-xs font-extrabold tracking-widest uppercase">Send a message</p>
				<p class="text-muted mt-2 text-sm">Opens a prefilled draft in Gmail.</p>

				<div class="mt-6 grid gap-4">
					<label class="grid gap-1.5 text-xs font-extrabold tracking-widest uppercase">
						Name
						<input
							name="name"
							autocomplete="name"
							bind:value={name}
							class="input-brutal focus-ring font-sans font-normal tracking-normal normal-case"
							placeholder="Your name"
						/>
					</label>
					<label class="grid gap-1.5 text-xs font-extrabold tracking-widest uppercase">
						Email
						<input
							name="email"
							type="email"
							autocomplete="email"
							bind:value={email}
							class="input-brutal focus-ring font-sans font-normal tracking-normal normal-case"
							placeholder="you@company.com"
						/>
					</label>
					<label class="grid gap-1.5 text-xs font-extrabold tracking-widest uppercase">
						Message
						<textarea
							name="message"
							rows="5"
							bind:value={message}
							class="input-brutal focus-ring min-h-[8rem] resize-y font-sans font-normal tracking-normal normal-case"
							placeholder="What are you building?"
						></textarea>
					</label>
				</div>

				{#if error}
					<p id="contact-error" class="mt-4 text-sm font-semibold text-[var(--danger)]" role="alert">
						{error}
					</p>
				{/if}

				{#if submitted && !error}
					<p
						class="mt-4 rounded-2xl border-[2.5px] border-[var(--ink)] bg-[var(--sun)] px-4 py-3 text-sm font-semibold shadow-[2px_2px_0_var(--ink)]"
						role="status"
					>
						Draft ready, if Gmail didn’t open, email
						<a href={emailHref} class="link-accent">{profile.email}</a>.
					</p>
				{/if}

				<button type="submit" class="btn-sticker btn-sun focus-ring mt-6 w-full sm:w-auto">
					<ButtonIcon name="send" />
					Open email draft
				</button>
			</form>
		</div>
	</MotionReveal>
</section>
