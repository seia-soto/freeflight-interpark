import {Formik} from 'formik';
import {useCallback, useEffect, useState} from 'react';
import {debounce} from '../mods/debounce';
import {getPreferences, setPreferences, type Preference} from '../mods/preferences';
import {styled} from '../style.config';
import {DashiconsCloudSaved, IconBox, SvgSpinnersRingResize} from './icons';

const Container = styled('section', {
	padding: '0 20px',

	background: '$white',
	color: '$black',
	fontSize: '16px',
	fontWeight: 400,
	lineHeight: '1.4em',
});

const Heading = styled('h2', {
	fontSize: '18px',
	fontWeight: 600,
});

const Entry = styled('section', {
	margin: '0.45em 0',

	// eslint-disable-next-line @typescript-eslint/naming-convention
	'&>label': {
		fontSize: '14px',
		fontWeight: 600,
	},

	variants: {
		type: {
			checkbox: {
				// eslint-disable-next-line @typescript-eslint/naming-convention
				'&>input': {
					marginRight: '8px',
				},
			},
			text: {
				// eslint-disable-next-line @typescript-eslint/naming-convention
				'&>input': {
					width: '100%',
					boxSizing: 'border-box',

					padding: '10px',
					borderLeft: 'none',
					borderTop: 'none',
					borderRight: 'none',
					borderBottom: '1.25px solid lightgray',

					color: '$black',
					fontSize: '16px',
				},
			},
		},
	},
});

function IsSaving(props: {isLoading: boolean}) {
	if (props.isLoading) {
		return (
			<p>
				<IconBox>
					<SvgSpinnersRingResize />
				</IconBox>
				<span style={{paddingLeft: '8px'}}>설정 동기화 중</span>
			</p>
		);
	}

	return (
		<p>
			<IconBox>
				<DashiconsCloudSaved />
			</IconBox>
			<span style={{paddingLeft: '8px'}}>설정 동기화됨</span>
		</p>
	);
}

export function Settings() {
	const [isLoading, setLoading] = useState(false);
	const [initialPreferences, setInitialPreferences] = useState<Preference>();

	const debouncedUpdate = useCallback(debounce(async values => {
		await setPreferences(values as Preference);
		setLoading(false);
	}), [setLoading]);

	useEffect(() => {
		(async () => {
			setLoading(true);

			const preferences = await getPreferences();

			setLoading(false);
			setInitialPreferences(preferences);
		})();
	}, []);

	if (!initialPreferences) {
		return null;
	}

	return (
		<Container>
			<IsSaving isLoading={isLoading} />
			<Formik
				initialValues={initialPreferences}
				validate={values => {
					setLoading(true);
					debouncedUpdate(values);
				}}
				validateOnChange
				onSubmit={(_, {setSubmitting}) => {
					setSubmitting(false);
				}}
			>
				{({
					values,
					handleChange,
				}) => (
					<form>
						<Heading>계정</Heading>
						<p>
              FreeFlight은 확장 프로그램 내에 개인정보를 저장하지 않습니다.
              비밀번호 관리자를 대신 사용해주세요.
						</p>
						<Entry type='checkbox'>
							<input type='checkbox' name='mods.autoLogin.enabled' id='autologin' checked={values.mods.autoLogin.enabled} onChange={handleChange} />
							<label htmlFor='autologin'>로그인되어 있지 않으면 로그인 페이지로 이동</label>
						</Entry>

						<Heading>티켓팅</Heading>
						<p>
							FreeFlight은 성공적인 티켓팅을 위해 만들어졌지만 보장하진 않습니다.
							이 핸들은 LCK 및 안심 예매에 적용할 수 있습니다.
						</p>
						<Entry type='checkbox'>
							<input type='checkbox' name='handles.submission.enabled' id='submission' checked={values.handles.submission.enabled} onChange={handleChange} />
							<label htmlFor='submission' title='티켓팅 핸들의 모든 기능을 활성화합니다.'>티켓팅 기능 활성화</label>
						</Entry>
						<Entry type='checkbox'>
							<input type='checkbox' name='handles.submission.shouldAutoFocusCaptcha' id='submission-shouldAutoFocusCaptcha' checked={values.handles.submission.shouldAutoFocusCaptcha} onChange={handleChange} />
							<label htmlFor='submission-shouldAutoFocusCaptcha'>보안문자 입력칸 자동 선택 및 한/영 자동 전환</label>
						</Entry>
						<Entry type='text'>
							<label htmlFor='submission-shouldAutoSelectSeatTypeAs'>좌석 유형 선택 시 다음 단어를 포함한 유형 자동 선택</label>
							<input
								type='text'
								name='handles.submission.shouldAutoSelectSeatTypeAs'
								id='submission-shouldAutoSelectSeatTypeAs'
								value={values.handles.submission.shouldAutoSelectSeatTypeAs}
								onChange={handleChange}
								placeholder='좌석 유형 이름'
							/>
						</Entry>
					</form>
				)}
			</Formik>
		</Container>
	);
}
