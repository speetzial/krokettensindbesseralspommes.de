const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Bullet,
		C3.Behaviors.Physics,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Plugins.Tilemap,
		C3.Behaviors.jumpthru,
		C3.Behaviors.solid,
		C3.Plugins.progressbar,
		C3.Behaviors.Anchor,
		C3.Behaviors.destroy,
		C3.Behaviors.LOS,
		C3.Plugins.TiledBg,
		C3.Plugins.Text,
		C3.Plugins.Mouse,
		C3.Plugins.Audio,
		C3.Plugins.Touch,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Cnds.IsMirrored,
		C3.Behaviors.Bullet.Cnds.CompareTravelled,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.Platform.Cnds.OnStop,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Cnds.OnLand,
		C3.Behaviors.Platform.Cnds.IsJumping,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.progressbar.Acts.SetProgress,
		C3.Plugins.Sprite.Acts.SetEffectEnabled,
		C3.Behaviors.Platform.Acts.ResetDoubleJump,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.AddInstanceVar,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.AddVar,
		C3.Behaviors.Physics.Acts.SetEnabled,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Sprite.Acts.SetCollisions,
		C3.Behaviors.Platform.Cnds.OnFall,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Exps.X,
		C3.Behaviors.Platform.Cnds.IsByWall,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetFlipped,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Behaviors.LOS.Cnds.HasLOSToObject,
		C3.Behaviors.Platform.Cnds.OnMove,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Behaviors.scrollto.Acts.SetEnabled,
		C3.Plugins.System.Acts.Scroll,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Behaviors.Platform.Acts.SetDefaultControls,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Behaviors.Platform.Cnds.OnJump,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Mouse.Cnds.OnClick
	];
};
self.C3_JsPropNameTable = [
	{AUSLÖSER1: 0},
	{AUSLÖSER2: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Kugel: 0},
	{Physik: 0},
	{Sprite5: 0},
	{Lives: 0},
	{Cooldown: 0},
	{Plattform: 0},
	{ScrolleZu: 0},
	{PLAYER: 0},
	{Tastatur: 0},
	{Springdurch: 0},
	{Platform: 0},
	{Festkörper: 0},
	{KILLAREA: 0},
	{Anker: 0},
	{Fortschrittsanzeige: 0},
	{POMMES: 0},
	{Sprite: 0},
	{Spikes: 0},
	{UNSICHTBAREWÄNDE: 0},
	{Fallspeed: 0},
	{FALLENDEBÖDEN: 0},
	{FALLE1: 0},
	{Sprite4: 0},
	{Right: 0},
	{HP: 0},
	{Walk: 0},
	{ZerstöreAußerhalbVomLayout: 0},
	{Sprite6: 0},
	{WALK: 0},
	{AKTIV: 0},
	{Sichtlinie: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{BOSSSTARTER: 0},
	{Fortschrittsanzeige2: 0},
	{Sprite10: 0},
	{Sprite11: 0},
	{GekachelterHintergrund: 0},
	{Text: 0},
	{GekachelterHintergrund2: 0},
	{GekachelterHintergrund3: 0},
	{GekachelterHintergrund4: 0},
	{GekachelterHintergrund5: 0},
	{Text2: 0},
	{Text3: 0},
	{Text4: 0},
	{Sprite12: 0},
	{Fortschrittsanzeige3: 0},
	{Sprite13: 0},
	{Text5: 0},
	{Sprite14: 0},
	{Sprite15: 0},
	{Maus: 0},
	{Text6: 0},
	{Audio: 0},
	{Sprite16: 0},
	{STEINSPAWNER: 0},
	{Sprite17: 0},
	{Text7: 0},
	{Text8: 0},
	{MODSOUNDAUSLÖSER: 0},
	{Touch: 0},
	{Gewonnen: 0},
	{Munition: 0}
];

self.InstanceType = {
	AUSLÖSER1: class extends self.ISpriteInstance {},
	AUSLÖSER2: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	PLAYER: class extends self.ISpriteInstance {},
	Tastatur: class extends self.IInstance {},
	Platform: class extends self.ITilemapInstance {},
	KILLAREA: class extends self.ISpriteInstance {},
	Fortschrittsanzeige: class extends self.IProgressBarInstance {},
	POMMES: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Spikes: class extends self.ISpriteInstance {},
	UNSICHTBAREWÄNDE: class extends self.ITilemapInstance {},
	FALLENDEBÖDEN: class extends self.ISpriteInstance {},
	FALLE1: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	BOSSSTARTER: class extends self.ISpriteInstance {},
	Fortschrittsanzeige2: class extends self.IProgressBarInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	GekachelterHintergrund: class extends self.ITiledBackgroundInstance {},
	Text: class extends self.ITextInstance {},
	GekachelterHintergrund2: class extends self.ITiledBackgroundInstance {},
	GekachelterHintergrund3: class extends self.ITiledBackgroundInstance {},
	GekachelterHintergrund4: class extends self.ITiledBackgroundInstance {},
	GekachelterHintergrund5: class extends self.ITiledBackgroundInstance {},
	Text2: class extends self.ITextInstance {},
	Text3: class extends self.ITextInstance {},
	Text4: class extends self.ITextInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	Fortschrittsanzeige3: class extends self.IProgressBarInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	Text5: class extends self.ITextInstance {},
	Sprite14: class extends self.ISpriteInstance {},
	Sprite15: class extends self.ISpriteInstance {},
	Maus: class extends self.IInstance {},
	Text6: class extends self.ITextInstance {},
	Audio: class extends self.IInstance {},
	Sprite16: class extends self.ISpriteInstance {},
	STEINSPAWNER: class extends self.ISpriteInstance {},
	Sprite17: class extends self.ISpriteInstance {},
	Text7: class extends self.ITextInstance {},
	Text8: class extends self.ITextInstance {},
	MODSOUNDAUSLÖSER: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {}
}