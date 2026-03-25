import { toast } from 'react-hot-toast';
import { askAI, saveFlow } from '../api/flowApi';
import useFlowStore from '../store/flowStore';
import { FLOW_ANIMATION_DURATION_MS, UI_TEXT } from '../utils/constants';

const useFlow = () => {
  const {
    prompt,
    response,
    isLoading,
    isSaving,
    setResponse,
    setLoading,
    setIsSaving,
    startFlowAnimation,
    stopFlowAnimation,
  } = useFlowStore();

  const handleRunFlow = async () => {
    if (!prompt.trim()) {
      toast.error(UI_TEXT.PROMPT_REQUIRED);
      return;
    }

    setLoading(true);
    startFlowAnimation();

    try {
      const animationPromise = new Promise((resolve) => {
        setTimeout(resolve, FLOW_ANIMATION_DURATION_MS);
      });
      const aiPromise = askAI(prompt.trim());

      const aiResult = await aiPromise;
      await animationPromise;
      setResponse(aiResult);
    } catch (error) {
      const message = error.response?.data?.message || UI_TEXT.RUN_FAILED;
      toast.error(message);
    } finally {
      stopFlowAnimation();
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!prompt.trim() || !response.trim()) {
      toast.error(UI_TEXT.SAVE_REQUIREMENTS);
      return;
    }

    setIsSaving(true);

    try {
      await saveFlow({ prompt: prompt.trim(), response: response.trim() });
      toast.success(UI_TEXT.FLOW_SAVED);
    } catch (error) {
      const message = error.response?.data?.message || UI_TEXT.SAVE_FAILED;
      toast.error(message);
    } finally {
      setIsSaving(false);
    }
  };

  return {
    response,
    isLoading,
    isSaving,
    handleRunFlow,
    handleSave,
  };
};

export default useFlow;
