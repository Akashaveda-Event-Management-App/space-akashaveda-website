// Utility function to dispatch space cursor toggle events
export function toggleSpaceCursor(enabled: boolean) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('space_cursor_enabled', String(enabled));
    window.dispatchEvent(new CustomEvent('space-cursor-toggle', { detail: { enabled } }));
  }
}
