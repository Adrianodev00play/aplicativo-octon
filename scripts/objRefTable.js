const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Fade,
		C3.Behaviors.TileMovement,
		C3.Plugins.Text,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Plugins.Touch,
		C3.Plugins.HTMLElement,
		C3.Plugins.C2WebSocket,
		C3.Plugins.Audio,
		C3.Plugins.iframe,
		C3.Plugins.Keyboard,
		C3.Plugins.Button,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Behaviors.TileMovement.Acts.SimulateControl,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Behaviors.Fade.Acts.SetFadeOutTime,
		C3.Behaviors.Fade.Acts.SetFadeInTime,
		C3.Behaviors.Fade.Acts.RestartFade,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetLayerHTML,
		C3.Plugins.Button.Cnds.OnClicked
	];
};
self.C3_JsPropNameTable = [
	{Esmaecer: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{MovimentoEmGrid: 0},
	{AZUL_ESCURO: 0},
	{LARANJA: 0},
	{VERDE_AGUA: 0},
	{ROSA: 0},
	{AZUL_CLARO: 0},
	{VERDE: 0},
	{CONHECA: 0},
	{TPOS_DE_VIOLENCIA: 0},
	{O_FAZER: 0},
	{SEUS_DIREITOS: 0},
	{PROCURE_AJUDA: 0},
	{SOBRE_O_APLICATIVO: 0},
	{SUA_EXPERIENCIA: 0},
	{Sólido: 0},
	{Sprite9: 0},
	{Sprite10: 0},
	{PRETO: 0},
	{Plataforma: 0},
	{Sprite12: 0},
	{COLISOR_HORIZONTAL: 0},
	{Texto: 0},
	{verde1: 0},
	{verde3: 0},
	{verde2: 0},
	{verde4: 0},
	{Toque: 0},
	{ElementoHTML: 0},
	{WebSocket: 0},
	{Áudio: 0},
	{FISICA: 0},
	{Sprite3: 0},
	{Texto2: 0},
	{Sprite11: 0},
	{iframe: 0},
	{sexual: 0},
	{textosexual: 0},
	{Teclado: 0},
	{textoPsicologico: 0},
	{psicologico: 0},
	{psicologico2: 0},
	{Sprite4: 0},
	{Texto3: 0},
	{Sprite5: 0},
	{Texto4: 0},
	{Texto5: 0},
	{Sprite6: 0},
	{Texto6: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{Texto7: 0},
	{Sprite13: 0},
	{Texto8: 0},
	{sexual2: 0},
	{direitos: 0},
	{bTipos: 0},
	{bviolencia_fisica: 0},
	{b_oQue_fazer_caso_sexual: 0},
	{bviolencia_moral: 0},
	{bviolencia_psicologica: 0},
	{b_oQue_fazer_caso_fisico: 0},
	{b_oQue_fazer_caso_psico: 0},
	{b_oQue_fazer_caso_moral: 0},
	{bviolencia_sexual: 0},
	{b_oque_fazer: 0},
	{b_denuncia: 0},
	{b_direitos: 0},
	{Botão: 0},
	{b_sobre: 0},
	{b_procure: 0},
	{botoes: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	AZUL_ESCURO: class extends self.ISpriteInstance {},
	LARANJA: class extends self.ISpriteInstance {},
	VERDE_AGUA: class extends self.ISpriteInstance {},
	ROSA: class extends self.ISpriteInstance {},
	AZUL_CLARO: class extends self.ISpriteInstance {},
	VERDE: class extends self.ISpriteInstance {},
	CONHECA: class extends self.ITextInstance {},
	TPOS_DE_VIOLENCIA: class extends self.ITextInstance {},
	O_FAZER: class extends self.ITextInstance {},
	SEUS_DIREITOS: class extends self.ITextInstance {},
	PROCURE_AJUDA: class extends self.ITextInstance {},
	SOBRE_O_APLICATIVO: class extends self.ITextInstance {},
	SUA_EXPERIENCIA: class extends self.ITextInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	PRETO: class extends self.ISpriteInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	COLISOR_HORIZONTAL: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	verde1: class extends self.ISpriteInstance {},
	verde3: class extends self.ISpriteInstance {},
	verde2: class extends self.ISpriteInstance {},
	verde4: class extends self.ISpriteInstance {},
	Toque: class extends self.IInstance {},
	ElementoHTML: class extends self.IHTMLElementInstance {},
	WebSocket: class extends self.IInstance {},
	Áudio: class extends self.IInstance {},
	FISICA: class extends self.ITextInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Texto2: class extends self.ITextInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	iframe: class extends self.IIframeInstance {},
	sexual: class extends self.ITextInstance {},
	textosexual: class extends self.ITextInstance {},
	Teclado: class extends self.IInstance {},
	textoPsicologico: class extends self.ITextInstance {},
	psicologico: class extends self.ITextInstance {},
	psicologico2: class extends self.ITextInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Texto3: class extends self.ITextInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Texto4: class extends self.ITextInstance {},
	Texto5: class extends self.ITextInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Texto6: class extends self.ITextInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Texto7: class extends self.ITextInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	Texto8: class extends self.ITextInstance {},
	sexual2: class extends self.ITextInstance {},
	direitos: class extends self.IIframeInstance {},
	bTipos: class extends self.ISpriteInstance {},
	bviolencia_fisica: class extends self.ISpriteInstance {},
	b_oQue_fazer_caso_sexual: class extends self.ISpriteInstance {},
	bviolencia_moral: class extends self.ISpriteInstance {},
	bviolencia_psicologica: class extends self.ISpriteInstance {},
	b_oQue_fazer_caso_fisico: class extends self.ISpriteInstance {},
	b_oQue_fazer_caso_psico: class extends self.ISpriteInstance {},
	b_oQue_fazer_caso_moral: class extends self.ISpriteInstance {},
	bviolencia_sexual: class extends self.ISpriteInstance {},
	b_oque_fazer: class extends self.ISpriteInstance {},
	b_denuncia: class extends self.ISpriteInstance {},
	b_direitos: class extends self.ISpriteInstance {},
	Botão: class extends self.IButtonInstance {},
	b_sobre: class extends self.ISpriteInstance {},
	b_procure: class extends self.ISpriteInstance {}
}